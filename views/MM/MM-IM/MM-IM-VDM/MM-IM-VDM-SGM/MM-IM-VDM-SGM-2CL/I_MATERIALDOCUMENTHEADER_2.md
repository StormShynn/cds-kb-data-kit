---
name: I_MATERIALDOCUMENTHEADER_2
description: Materialdocumentheader 2
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - document
  - header-level
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTHEADER_2

**Materialdocumentheader 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocument` | `MaterialDocument` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `AccountingDocumentType` | `AccountingDocumentType` |
| `InventoryTransactionType` | `InventoryTransactionType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `MaterialDocumentHeaderText` | `MaterialDocumentHeaderText` |
| `DeliveryDocument` | `DeliveryInMatlDocumentHeader` |
| `ReferenceDocument` | `ReferenceDocument` |
| `BillOfLading` | `BillOfLading` |
| `VersionForPrintingSlip` | `VersionForPrintingSlip` |
| `ManualPrintIsTriggered` | `ManualPrintIsTriggered` |
| `CtrlPostgForExtWhseMgmtSyst` | `CtrlPostgForExtWhseMgmtSyst` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `IssuingOrReceivingPlant` | `IssuingOrReceivingPlant` |
| `IssuingOrReceivingStorageLoc` | `IssuingOrReceivingStorageLoc` |
| `_MaterialDocumentYear` | *Association* |
| `_MaterialDocumentItem` | *Association* |
| `_DeliveryDocument` | *Association* |
| `_StorageLocation` | *Association* |
| `_IssuingOrReceivingStorageLoc` | *Association* |
| `_User` | *Association* |
| `_AccountingDocumentType` | *Association* |
| `_InventoryTransactionType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialDocumentYear` | `I_MaterialDocumentYear` | [1..1] |
| `_MaterialDocumentItem` | `I_MaterialDocumentItem_2` | [1..*] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_IssuingOrReceivingStorageLoc` | `I_StorageLocation` | [0..1] |
| `_ItemExtension` | `E_MaterialDocumentItem` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Material Document Header'

@AccessControl: {
                    authorizationCheck: #CHECK,
                    personalData.blocking: #NOT_REQUIRED,
                    privilegedAssociations: ['_User']
                 }

@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #B,
                             dataClass:#TRANSACTIONAL
                           },
                compositionRoot: true,
                representativeKey: 'MaterialDocument',
                semanticKey: ['MaterialDocumentYear', 'MaterialDocument'],
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@Search.searchable: true
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
                dataCategory: #DIMENSION,
                internalName:#LOCAL,
                technicalName: 'IMATDOCHEADER2'
             }

@Metadata: {
             ignorePropagatedAnnotations: true,
             allowExtensions: true
           }
-- This view is the successor view for the view I_MaterialDocumentHeader
define view entity I_MaterialDocumentHeader_2
  as select from I_MaterialDocumentRecord
  association [1..1] to I_MaterialDocumentYear   as _MaterialDocumentYear         on  $projection.MaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [1..*] to I_MaterialDocumentItem_2 as _MaterialDocumentItem         on  $projection.MaterialDocumentYear = _MaterialDocumentItem.MaterialDocumentYear
                                                                                  and $projection.MaterialDocument     = _MaterialDocumentItem.MaterialDocument
  association [0..1] to I_DeliveryDocument       as _DeliveryDocument             on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument

  association [0..1] to I_StorageLocation        as _StorageLocation              on  $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                  and $projection.Plant           = _StorageLocation.Plant
  association [0..1] to I_StorageLocation        as _IssuingOrReceivingStorageLoc on  $projection.IssuingOrReceivingStorageLoc = _IssuingOrReceivingStorageLoc.StorageLocation
                                                                                  and $projection.IssuingOrReceivingPlant      = _IssuingOrReceivingStorageLoc.Plant
  association [0..*] to E_MaterialDocumentItem   as _ItemExtension                on  $projection.MaterialDocument              = _ItemExtension.MaterialDocument
                                                                                  and $projection.MaterialDocumentYear          = _ItemExtension.MaterialDocumentYear
                                                                                  and _ItemExtension.MaterialDocumentRecordType = 'MDOC'

  -- the association to the DeliveryDocument would also be available as _DeliveryInMatlDocumentHeader in I_MaterialDocumentRecord,
  -- but since the field is rebranded as DeliveryDocument in the header view, the repeated association seems to make sense
{
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key MaterialDocumentYear,
      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #HIGH
                }
  key MaterialDocument,


      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
                }
      @Semantics.businessDate.at: true
      DocumentDate,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
                }
      @Semantics.businessDate.at: true
      PostingDate,
      AccountingDocumentType,
      InventoryTransactionType,

      CreatedByUser,
      CreationDate,
      CreationTime,
      MaterialDocumentHeaderText,


      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
                }
      @ObjectModel.foreignKey.association: '_DeliveryDocument'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DeliveryDocumentStdVH',
                     element: 'DeliveryDocument' }
        }]
      DeliveryInMatlDocumentHeader as DeliveryDocument,
      ReferenceDocument,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      BillOfLading,

      VersionForPrintingSlip,
      @Semantics.booleanIndicator:true
      ManualPrintIsTriggered,

      CtrlPostgForExtWhseMgmtSyst,

      // Authorization check
      @Consumption.hidden: true
      Plant,
      @Consumption.hidden: true
      StorageLocation,
      @Consumption.hidden: true
      IssuingOrReceivingPlant,
      @Consumption.hidden: true
      IssuingOrReceivingStorageLoc,

      // Authorization check

      _MaterialDocumentYear,
      @ObjectModel.association.type:[#TO_COMPOSITION_CHILD]
      _MaterialDocumentItem,

      _User,
      _AccountingDocumentType,
      _InventoryTransactionType,

      _DeliveryDocument,
      // Authorization check
      @Consumption.hidden: true
      _StorageLocation,
      @Consumption.hidden: true
      _IssuingOrReceivingStorageLoc
      // Authorization check

}
where
      MaterialDocumentRecordType = 'MDOC'
  and IsMaterialDocumentHeader   = 1
```
