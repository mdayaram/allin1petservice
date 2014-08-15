import java.io.*;
import java.util.*;

public class sofer2thorp{

	public static void rep(String filename) throws IOException{
		BufferedReader in = new BufferedReader(new FileReader(filename));
		String accum = "";
		boolean bb = true;
		String line;
		while((line = in.readLine()) != null){
			if(line.indexOf("sofer") >= 0 && bb){
				line = line.replaceFirst("sofer.html", "thorp.html");
				line = line.replaceAll("AJ Sofer", "Liz Thorp");
				bb = false;
			}
			accum += line + "\n";
		}
		in.close();
		PrintWriter out = new PrintWriter(filename);
		out.println(accum);
		out.close();

	}

	public static void main(String[]args) throws IOException{
		File f = new File(".");
		String[] list = f.list();
		for(int i=0; i< list.length; i++){
			if(list[i].indexOf(".html") >=0)
				rep(list[i]);
		}
	}
}
