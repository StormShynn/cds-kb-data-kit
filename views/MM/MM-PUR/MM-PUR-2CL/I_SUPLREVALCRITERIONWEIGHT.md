---
name: I_SUPLREVALCRITERIONWEIGHT
description: Suplrevalcriterionweight
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
# I_SUPLREVALCRITERIONWEIGHT

**Suplrevalcriterionweight**

| Property | Value |
|---|---|
| App Component | `MM-PUR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingCategory` | `purchasingcategory` |
| key `PurchasingOrganization` | `purchasingorganization` |
| `SupplierEvalTimeWeighting` | `evaluationtimeweight` |
| `SupplierEvalQuantityWeighting` | `evaluationquantityweight` |
| `SupplierEvalQualityWeighting` | `evaluationqualityweight` |
| `SupplierEvalPriceWeighting` | `evaluationpriceweight` |
| `SupplierEvalQnaireWeighting` | `evaluationquestionareweight` |
| `SupplierEvalQltyNotifWeighting` | `evaluationqltynotifweight` |
| `SupplierEvalUsrCriteria1Wgtg` | `evaluationusercriteria1weight` |
| `SupplierEvalUsrCriteria2Wgtg` | `evaluationusercriteria2weight` |
| `SupplierEvalUsrCriteria3Wgtg` | `evaluationusercriteria3weight` |
| `SupplierEvalUsrCriteria4Wgtg` | `evaluationusercriteria4weight` |
| `SupplierEvalUsrCriteria5Wgtg` | `evaluationusercriteria5weight` |
| `SuplrEvalUsrCriteria6WgtgValue` | `evaluationusercriteria6weight` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEWSCRITRNWT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S

@VDM.viewType: #BASIC
@EndUserText.label: 'Criterion Weight for Supplier Evaluation'
@AccessControl.personalData.blocking: #NOT_REQUIRED  
@AbapCatalog.preserveKey: true  
//@ObjectModel.representativeKey: 'SupplierClassification' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalCriterionWeight
  as select from sews_critrn_wt 
{
  
  key purchasingcategory            as PurchasingCategory,
  key purchasingorganization        as PurchasingOrganization,
      evaluationtimeweight          as SupplierEvalTimeWeighting,
      evaluationquantityweight      as SupplierEvalQuantityWeighting,
      evaluationqualityweight       as SupplierEvalQualityWeighting,
      evaluationpriceweight         as SupplierEvalPriceWeighting,
      evaluationquestionareweight   as SupplierEvalQnaireWeighting,
      evaluationqltynotifweight     as SupplierEvalQltyNotifWeighting,
      evaluationusercriteria1weight as SupplierEvalUsrCriteria1Wgtg,
      evaluationusercriteria2weight as SupplierEvalUsrCriteria2Wgtg,
      evaluationusercriteria3weight as SupplierEvalUsrCriteria3Wgtg,
      evaluationusercriteria4weight as SupplierEvalUsrCriteria4Wgtg,
      evaluationusercriteria5weight as SupplierEvalUsrCriteria5Wgtg, 
       evaluationusercriteria6weight as SuplrEvalUsrCriteria6WgtgValue 
      //      ,
      //      totalweightingfactor
}
```
