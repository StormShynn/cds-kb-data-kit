---
name: I_PURGCATTRANSLATIONSTSAPI01
description: "Purgcattranslationstsapi 01"
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURGCATTRANSLATIONSTSAPI01

**Purgcattranslationstsapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgCatTranslationUUID` | ✓ | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `PurgCatTranslationTgtLang` |  | |  |  |  |  |
| `PurgCatTranslationTgtLangSts` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCTRSTAPI01'
@EndUserText.label: 'Translation Status of Purg Category'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
define view I_PurgCatTranslationStsAPI01 as select from I_PurchasingCatTranslationSts
{ 
  key PurgCatTranslationUUID, 
  PurgCatUUID, 
  PurgCatTranslationTgtLang, 
  PurgCatTranslationTgtLangSts 

}
```
