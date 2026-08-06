---
name: I_SUPPLIERACCOUNTGROUPTEXT
description: Supplieraccountgrouptext
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - supplier
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERACCOUNTGROUPTEXT

**Supplieraccountgrouptext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `t077y.spras` |
| key `SupplierAccountGroup` | `t077y.ktokk` |
| `AccountGroupName` | `t077y.txt30` |
| `_SupplierAccountGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierAccountGroup` | `I_SupplierAccountGroup` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPPACCTGRPTXT'
@EndUserText.label: 'Supplier Account Group - Text'//'Supplier Account Group'
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'SupplierAccountGroup'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                    
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
define view I_SupplierAccountGroupText
  as select from t077y
  association [1..1] to I_SupplierAccountGroup as _SupplierAccountGroup on _SupplierAccountGroup.SupplierAccountGroup = $projection.SupplierAccountGroup
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key t077y.spras as Language,

  key t077y.ktokk as SupplierAccountGroup,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      t077y.txt30 as AccountGroupName,

      //associations
      _SupplierAccountGroup,
      _Language


}
```
