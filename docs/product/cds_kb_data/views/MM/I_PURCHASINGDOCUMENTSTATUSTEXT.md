---
name: I_PURCHASINGDOCUMENTSTATUSTEXT
description: "Purchasingdocumentstatustext"
app_component: MM
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
