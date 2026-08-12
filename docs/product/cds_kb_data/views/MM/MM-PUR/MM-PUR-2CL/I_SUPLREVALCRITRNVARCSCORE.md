---
name: I_SUPLREVALCRITRNVARCSCORE
description: "Suplrevalcritrnvarcscore"
app_component: MM-PUR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
