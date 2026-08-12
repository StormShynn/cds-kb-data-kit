---
name: I_BOPFORMITEMRULE
description: "Bopformitemrule"
app_component: FI-LOC-FI
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - item-level
  - component:FI-LOC-FI
  - lob:Finance
---
# I_BOPFORMITEMRULE

**Bopformitemrule**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOPRptgCntry` | ✓ | |  | `country` |  |  |
| `BOPForm` | ✓ | |  | `form` |  |  |
| `BOPFormItem` | ✓ | |  | `item` |  |  |
| `BOPFormItemRule` | ✓ | |  | `rule_id` |  |  |
| `BOPChtAccts` |  | |  | `chartofaccounts` |  |  |
| `BOPLowrBndryGLAcct` |  | |  | `account_from` |  |  |
| `BOPUprBndryGLAcct` |  | |  | `account_to` |  |  |
| `BOPTaxCode` |  | |  | `taxcode` |  |  |
| `BOPAcctgDocType` |  | |  | `doctype` |  |  |
| `BOPTriangularDealRelevancy` |  | |  | `boptriangulardealrelevancy` |  |  |
| `_BOPRptgCntry` | | ✓ | | | | |
| `_BOPForm` | | ✓ | | | | |
| `_BOPFormItem` | | ✓ | | | | |
| `_BOPTriangularDealRelevancy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOPRptgCntry` | `I_Country` | [0..1] |
| `_BOPForm` | `I_BOPForm` | [0..1] |
| `_BOPFormItem` | `I_BOPFormItem` | [0..1] |
| `_BOPTriangularDealRelevancy` | `I_BOPTriangularDealRelevancy` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Balance of Payments Form Item Rule'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true 
@AbapCatalog.sqlViewName: 'IBOPRULE' 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling: { type: #CLIENT_DEPENDENT, algorithm: #SESSION_VARIABLE }
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #B }
@ObjectModel.representativeKey: 'BOPFormItemRule'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_BOPFormItemRule as

select from glo_t_boprule

association [0..1] to I_Country as _BOPRptgCntry    on $projection.BOPRptgCntry = _BOPRptgCntry.Country  
association [0..1] to I_BOPForm as _BOPForm         on $projection.BOPRptgCntry = _BOPForm.BOPRptgCntry and 
                                                       $projection.BOPForm      = _BOPForm.BOPForm 
association [0..1] to I_BOPFormItem as _BOPFormItem on $projection.BOPRptgCntry = _BOPFormItem.BOPRptgCntry and 
                                                       $projection.BOPForm      = _BOPFormItem.BOPForm and
                                                       $projection.BOPFormItem  = _BOPFormItem.BOPFormItem
association [0..1] to I_BOPTriangularDealRelevancy as _BOPTriangularDealRelevancy
                                                    on $projection.BOPTriangularDealRelevancy = _BOPTriangularDealRelevancy.BOPTriangularDealRelevancy                                                       
{
 
  @ObjectModel.foreignKey.association: '_BOPRptgCntry'  
  key country     as BOPRptgCntry,
  @ObjectModel.foreignKey.association: '_BOPForm'     
  key form        as BOPForm,
  @ObjectModel.foreignKey.association: '_BOPFormItem'     
  key item        as BOPFormItem,
  key rule_id     as BOPFormItemRule,

  chartofaccounts as BOPChtAccts,
  account_from    as BOPLowrBndryGLAcct,
  account_to      as BOPUprBndryGLAcct,
  taxcode         as BOPTaxCode,
  doctype         as BOPAcctgDocType,
  @ObjectModel.foreignKey.association: '_BOPTriangularDealRelevancy'  
  boptriangulardealrelevancy as BOPTriangularDealRelevancy,
      
  _BOPRptgCntry,
  _BOPForm,
  _BOPFormItem,
  _BOPTriangularDealRelevancy
      
}
```
