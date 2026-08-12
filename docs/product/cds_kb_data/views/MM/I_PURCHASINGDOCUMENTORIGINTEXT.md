---
name: I_PURCHASINGDOCUMENTORIGINTEXT
description: "Purchasingdocumentorigintext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PURCHASINGDOCUMENTORIGINTEXT

**Purchasingdocumentorigintext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PurchasingDocumentOrigin` | ✓ | |  | `cast( dd07t.domvalue_l as vdm_purhasingdocumentorigin )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PurchasingDocumentOriginName` |  | |  | `cast( dd07t.ddtext as purchasingdocumentoriginname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchasingDocumentOrigin` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Purchasing Document Origin - Text' //same as DDL description
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@Analytics.dataExtraction.enabled: true
@AbapCatalog.sqlViewName: 'IMMPURGDOCORGTXT'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'PurchasingDocumentOrigin'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentOriginText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PurchasingDocumentOriginText
  as select from dd07t
  association        to parent I_PurchasingDocumentOrigin as _PurchasingDocumentOrigin on $projection.PurchasingDocumentOrigin = _PurchasingDocumentOrigin.PurchasingDocumentOrigin
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                    as Language,
      @ObjectModel.foreignKey.association: '_Purchasingdocumentorigin'
      @ObjectModel.text.element: ['PurchasingDocumentOriginName']
  key cast( dd07t.domvalue_l as vdm_purhasingdocumentorigin )              as PurchasingDocumentOrigin,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as purchasingdocumentoriginname preserving type ) as PurchasingDocumentOriginName,
      _PurchasingDocumentOrigin,
      _Language
}
where
      dd07t.domname  = 'ESTAK'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
