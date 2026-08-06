---
name: I_DELIVERYDOCUMENTTYPETEXT
description: Delivery DocumentUMENTTYPETEXT
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - delivery-document
  - delivery
  - document
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:DeliveryDocument
---
# I_DELIVERYDOCUMENTTYPETEXT

**Delivery DocumentUMENTTYPETEXT**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DeliveryDocumentType` | `lfart` |
| key `Language` | `spras` |
| `DeliveryDocumentTypeName` | `vtext` |
| `_DeliveryDocumentType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocumentType` | `I_DeliveryDocumentType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'DeliveryDocumentTypeText'
@ObjectModel.representativeKey: 'DeliveryDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Document Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEDELIVDOCTYPET'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@Search.searchable: true
@Consumption.ranked: true

define view I_DeliveryDocumentTypeText
  as select from tvlkt
  association [0..1] to I_DeliveryDocumentType as _DeliveryDocumentType on $projection.DeliveryDocumentType = _DeliveryDocumentType.DeliveryDocumentType
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_DeliveryDocumentType'
  key lfart as DeliveryDocumentType,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      vtext as DeliveryDocumentTypeName,

      _DeliveryDocumentType,
      _Language
};
```
