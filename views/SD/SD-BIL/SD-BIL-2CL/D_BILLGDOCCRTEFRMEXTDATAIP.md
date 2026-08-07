---
name: D_BILLGDOCCRTEFRMEXTDATAIP
description: D Billgdoccrtefrmextdataip
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
# D_BILLGDOCCRTEFRMEXTDATAIP

**D Billgdoccrtefrmextdataip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ReferenceLogicalSystem` |  | |  | `sdbil_odata_source_system` |

## Source Code

```abap
@EndUserText.label: 'Billing Document Create From External - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BillgDocCrteFrmExtDataIP
{
  ReferenceLogicalSystem : sdbil_odata_source_system; // Mandatory
  _BillableDocument      : association [1..*] to D_BlgDcCrteFrmExtBllbleDocIP on 1 = 0;

}
```
