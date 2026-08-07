---
name: I_SUPLREVALUATIONTEMPLATEAPI01
description: Suplrevaluationtemplateapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
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
# I_SUPLREVALUATIONTEMPLATEAPI01

**Suplrevaluationtemplateapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalTemplateUUID` | ✓ | |  |  |
| `SupplierEvalTemplate` |  | |  |  |
| `SuplrEvalTemplateName` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  | `cast(CreatedByUser as /srmsmc/created_by )` |
| `LastChangeDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |
| `SuplrEvalTmplDaysToRspDeadline` |  | |  |  |
| `PurgCatUUID` |  | |  |  |
| `SuplrEvalTmplOriginalLanguage` |  | |  |  |
| `SuplrEvalTmplOvrlTranslSts` |  | |  |  |
| `SuplrEvalTemplateLifecycleSts` |  | |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.sqlViewName: 'ISUPEVLTMPAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.compositionRoot: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Template for Supplier Evaluation'
define view I_SuplrEvaluationTemplateAPI01
  as select from I_SupplierEvalTemplate
{
  key SuplrEvalTemplateUUID,
      SupplierEvalTemplate,
      SuplrEvalTemplateName,
      CreationDateTime,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      SuplrEvalTmplDaysToRspDeadline,
      PurgCatUUID,
      SuplrEvalTmplOriginalLanguage,
      SuplrEvalTmplOvrlTranslSts,
      SuplrEvalTemplateLifecycleSts
}
```
