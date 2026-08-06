---
name: I_PURGCATDESCRIPTIONAPI01
description: Purgcatdescriptionapi 01
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - text-view
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURGCATDESCRIPTIONAPI01

**Purgcatdescriptionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurgCatDescriptionUUID` | `PurgCatDescriptionUUID` |
| `Language` | `Language` |
| `PurgCatUUID` | `PurgCatUUID` |
| `PurgCatDescription` | `PurgCatDescription` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCDESCAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Description of Purchasing Category'
define view I_PurgCatDescriptionAPI01 as select from I_PurchasingCategoryDesc {
  key PurgCatDescriptionUUID, 
  Language, 
  PurgCatUUID, 
  PurgCatDescription
}
```
