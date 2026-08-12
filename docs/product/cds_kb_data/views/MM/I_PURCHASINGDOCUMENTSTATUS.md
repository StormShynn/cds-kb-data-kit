---
name: I_PURCHASINGDOCUMENTSTATUS
description: "Purchasingdocumentstatus"
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
  - document
  - status
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTSTATUS

**Purchasingdocumentstatus**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentStatus` | ✓ | |  | `cast ( domvalue_l as mmpur_doc_status )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Status of Purchasing Document'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IMMPURGDOCSTA'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'PurchasingDocumentStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentStatus'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurchasingDocumentStatus
  as select from dd07l

  composition [0..*] of I_PurchasingDocumentStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as mmpur_doc_status ) as PurchasingDocumentStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                        as DomainValue,

      _Text
}
where
      domname       = 'MMPUR_DOC_STATUS'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
