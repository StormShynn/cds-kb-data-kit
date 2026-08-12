---
name: I_SUPLREVALSCCRDTMPLREFAPI01
description: "Suplrevalsccrdtmplrefapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALSCCRDTMPLREFAPI01

**Suplrevalsccrdtmplrefapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalScorecardRefUUID` | ✓ | |  |  |  |  |
| `SuplrEvalScorecardUUID` |  | |  |  |  |  |
| `SuplrEvalTemplateUUID` |  | |  |  |  |  |
| `SupplierEvalTemplate` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESCTMPLAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@EndUserText.label: 'Template Ref for Suplr Eval Scorecard'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalSccrdTmplRefAPI01
  as select from I_SuplrEvalScorecardTmplRef
{
  key SuplrEvalScorecardRefUUID,
      SuplrEvalScorecardUUID,
      SuplrEvalTemplateUUID,
      SupplierEvalTemplate
}
```
