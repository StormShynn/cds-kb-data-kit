---
name: I_PURGDOCUMENTPROCESSCODETEXT
description: "Purgdocumentprocesscodetext"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - document
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCUMENTPROCESSCODETEXT

**Purgdocumentprocesscodetext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentProcessCode` | ✓ | |  | `cast (cast(substring(dd07t.domvalue_l ,1,3) as abap.char( 3 ) ) as mmpur_process_indicator )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PurgDocumentProcessCodeName` |  | |  | `cast (dd07t.ddtext as purgdocumentprocesscodename preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurgDocumentProcessCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURDOCPCODET'
@AbapCatalog.compiler.compareFilter: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Document Process Code - Text'
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchasingDocumentProcessCode'
@ObjectModel.sapObjectNodeType.name: 'PurgDocumentProcessCodeText'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC 
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view  I_PurgDocumentProcessCodeText
  as select from dd07t
  association to parent I_PurgDocumentProcessCode as _PurgDocumentProcessCode
    on $projection.PurchasingDocumentProcessCode = _PurgDocumentProcessCode.PurchasingDocumentProcessCode
  association [0..1] to I_Language as _Language 
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PurgDocumentProcessCode'
      @ObjectModel.text.element: ['PurgDocumentProcessCodeName'] 
    key cast (cast(substring(dd07t.domvalue_l ,1,3) as abap.char( 3 ) ) as mmpur_process_indicator ) as PurchasingDocumentProcessCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,      
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#LOW
      @Semantics.text: true
      cast (dd07t.ddtext  as purgdocumentprocesscodename preserving type ) as PurgDocumentProcessCodeName,
      _PurgDocumentProcessCode,
      _Language
}
where
      domname  = 'MMPUR_PROCESS_INDICATOR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers = '0000'
```
