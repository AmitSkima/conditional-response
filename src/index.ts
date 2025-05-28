export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const stagingUrl = new URL(
      `https://staging.careers-job.com${url.pathname}${url.search}`
    );

    // Create a new request with the same properties as the original
    const newRequest = new Request(stagingUrl.toString(), {
      ...request,
      redirect: "follow",
    });

    try {
      const response = await fetch(newRequest);
      return response;
    } catch (error: any) {
      return new Response(`Error fetching from staging: ${error.message}`, {
        status: 500,
      });
    }
  },
};
