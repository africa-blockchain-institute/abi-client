export default function ({ route, redirect }) {
  // Redirect all courses pages to discontinued page
  if (route.path.startsWith('/courses')) {
    return redirect('/')
  }
}