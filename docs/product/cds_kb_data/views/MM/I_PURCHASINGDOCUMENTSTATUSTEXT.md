---
name: I_PURCHASINGDOCUMENTSTATUSTEXT
description: "Purchasingdocumentstatustext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - document
  - text
  - status
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTSTATUSTEXT

**Purchasingdocumentstatustext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentStatus` | ✓ | |  | `cast ( dd07t.domvalue_l as mmpur_doc_status )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PurchasingDocumentStatusName` |  | |  | `cast ( ddtext as mmpur_doc_status_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurchasingDocumentStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IMMPURGDOCSTATXT'
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Purchasing Document Status - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'PurchasingDocumentStatus'
@ObjectModel.dataCategory:#TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentStatusText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_PurchasingDocumentStatusText
  as select from dd07t

  //association [0..1] to I_PurchasingDocumentStatus as _PurchasingDocumentStatus on $projection.PurchasingDocumentStatus = _PurchasingDocumentStatus.PurchasingDocumentStatus
association to parent I_PurchasingDocumentStatus as _PurchasingDocumentStatus
    on $projection.PurchasingDocumentStatus = _PurchasingDocumentStatus.PurchasingDocumentStatus
    
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_PurchasingDocumentStatus'
      @ObjectModel.text.element: ['PurchasingDocumentStatusName']
  key cast ( dd07t.domvalue_l as mmpur_doc_status ) as PurchasingDocumentStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
  
  @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast ( ddtext as mmpur_doc_status_name preserving type ) as PurchasingDocumentStatusName,
      
      _PurchasingDocumentStatus,
      _Language

}

where
      domname  = 'MMPUR_DOC_STATUS'
  and as4local = 'A' 
  and dd07t.as4vers  = '0000'
```
