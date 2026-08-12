---
name: I_SUPLREVALCLASSFCTNCODETXT
description: "Suplrevalclassfctncodetxt"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLREVALCLASSFCTNCODETXT

**Suplrevalclassfctncodetxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `SupplierClassification` | ✓ | |  | `cast( dd07t.domvalue_l as mm_classification )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `SupplierClfnName` |  | |  | `cast (dd07t.ddtext as mm_classifciation_text )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Code` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLEVCLCOT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'SupplierClassification'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Eval Classification Code - Text'
define view I_SuplrEvalClassfctnCodeTxt
  as select from dd07t
  association        to parent I_SuplrEvalClassfctnCode as _Code     on $projection.SupplierClassification = _Code.SupplierClassification
  association [0..1] to I_Language                      as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_Code'
      @ObjectModel.text.element: ['SupplierClfnName']
  key cast( dd07t.domvalue_l as mm_classification )     as SupplierClassification,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast (dd07t.ddtext as mm_classifciation_text )    as SupplierClfnName,
      _Code,
      _Language

}
where
      dd07t.domname  = 'MM_CLASSIFICATION'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
