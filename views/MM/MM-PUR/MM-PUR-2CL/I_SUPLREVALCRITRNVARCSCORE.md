---
name: I_SUPLREVALCRITRNVARCSCORE
description: "Suplrevalcritrnvarcscore"
app_component: MM-PUR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - interface-view
  - component:MM-PUR-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALCRITRNVARCSCORE

**Suplrevalcritrnvarcscore**

| Property | Value |
|---|---|
| App Component | `MM-PUR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingCategory` | ✓ | |  | `purchasingcategory` |  |  |
| `PurchasingOrganization` | ✓ | |  | `purchasingorganization` |  |  |
| `SuplrEvalCriterion` | ✓ | |  | `suplrevalcriterion` |  |  |
| `SuplrEvalAbsltVariancePctFrom` | ✓ | |  | `absolutepercentagefrom` |  |  |
| `SuplrEvalAbsltVariancePctTo` | ✓ | |  | `absolutepercentageto` |  |  |
| `SupplierEvaluationScore` |  | |  | `supplierevaluationscore` |  |  |
| `SuplrEvalVarcScrUprLmtIndIsSet` |  | |  | `suplrevalvarcscruprlmtindisset` |  |  |
| `SuplrEvalScrLowrLmtIndIsSet` |  | |  | `suplrevalscrlowrlmtindisset` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEWSVARSCORE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Score Variance for Suplr Eval Criterion'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S 
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED    
@AbapCatalog.preserveKey: true  
//@ObjectModel.representativeKey: 'SupplierClassification' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_SuplrEvalCritrnVarcScore
  as select from sews_var_score
{

  key purchasingcategory      as PurchasingCategory,
  key purchasingorganization  as PurchasingOrganization,
  key suplrevalcriterion      as SuplrEvalCriterion,
  key absolutepercentagefrom  as SuplrEvalAbsltVariancePctFrom,
  key absolutepercentageto    as SuplrEvalAbsltVariancePctTo,
      supplierevaluationscore as SupplierEvaluationScore,
      suplrevalvarcscruprlmtindisset as SuplrEvalVarcScrUprLmtIndIsSet,
      suplrevalscrlowrlmtindisset as SuplrEvalScrLowrLmtIndIsSet
}
```
