---
name: I_CONDITIONAPPLICATIONTEXT
description: "Conditionapplicationtext"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_CONDITIONAPPLICATIONTEXT

**Conditionapplicationtext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `ConditionApplicationName` |  | |  | `vtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDAPPLTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@EndUserText.label: 'Condition Application - Text'
@Analytics.dataExtraction.enabled: true 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.representativeKey: 'ConditionApplication'
@Metadata.ignorePropagatedAnnotations:true
define view I_ConditionApplicationText
  as select from t681b
{
      @Semantics.language: true
  key spras as Language,
  key kappl as ConditionApplication,
      @Semantics.text: true
      vtext as ConditionApplicationName
}
```
