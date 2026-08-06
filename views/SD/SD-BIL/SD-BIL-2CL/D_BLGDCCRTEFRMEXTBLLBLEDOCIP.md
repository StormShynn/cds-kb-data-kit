---
name: D_BLGDCCRTEFRMEXTBLLBLEDOCIP
description: D Blgdccrtefrmextbllbledocip
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BLGDCCRTEFRMEXTBLLBLEDOCIP

**D Blgdccrtefrmextbllbledocip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceDocument` | `sdbil_odata_source_document` |
| `D_BlgDcCrteFrmExtBlblDocItmIP` | `_Item : composition [1..*] of D_BlgDcCrteFrmExtBlblDocItmIP` |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Billable Document - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BlgDcCrteFrmExtBllbleDocIP
{
  ReferenceDocument : sdbil_odata_source_document; //Mandatory
  _Item             : composition [1..*] of D_BlgDcCrteFrmExtBlblDocItmIP;

  _Text             : association [0..*] to D_BillgDocCrteFrmExtTxtIP on 1 = 0;

  _PaymentCard      : association [0..*] to D_BillgDocCrteFrmExtPaytCardIP on 1 = 0;

}
```
