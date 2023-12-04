<?php
function createTable(string $titleSection,string $titleTable,string $path){
  echo '<p class="question">'. $titleSection .'</p>
  <div class="response">
      <table>
          <thead>
              <tr>
                  <td>'.$titleTable.'</td>
              </tr>
          </thead>
            '.include($path).'
      </table>
  </div>';
}