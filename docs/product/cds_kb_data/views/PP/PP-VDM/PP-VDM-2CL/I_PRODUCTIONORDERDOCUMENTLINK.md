---
name: I_PRODUCTIONORDERDOCUMENTLINK
description: "Production OrderDOCUMENTLINK"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - production-order
  - document
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERDOCUMENTLINK

**Production OrderDOCUMENTLINK**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LinkedSAPObjectKey` | ✓ | |  |  |  |  |
| `DocumentType` | ✓ | |  | `cast(docl.DocumentType as dokar preserving type)` |  |  |
| `DocumentInfoRecord` | ✓ | |  | `cast(docl.DocumentInfoRecord as doknr preserving type)` |  |  |
| `DocumentPart` | ✓ | |  | `cast(docl.DocumentPart as pph_doktl preserving type)` |  |  |
| `DocumentVersion` | ✓ | |  | `cast(docl.DocumentVersion as pph_dokvr preserving type)` |  |  |
| `CreationDateTime` |  | |  | `cast(docl.CreationDateTime as hp_created_at preserving type)` |  |  |
| `CreatedByUser` |  | |  | `cast(docl.CreatedByUser as ernam preserving type)` |  |  |
| `ChangedDateTime` |  | |  | `cast(docl.ChangedDateTime as hp_changed_at preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(docl.LastChangedByUser as aenam preserving type)` |  |  |
| `ProductionOrderType` |  | |  | `cast(docl.ManufacturingOrderType as vdm_prodnordertype preserving type)` |  |  |
| `ProductionOrder` |  | |  | `cast(docl.ManufacturingOrder as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderSequence` |  | |  | `cast(docl.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)` |  |  |
| `ProductionOrderOperation` |  | |  | `cast(docl.ManufacturingOrderOperation as vdm_prodnorderoperation preserving type)` |  |  |
| `InternalDocumentStatus` |  | |  | `cast(docl.InternalDocumentStatus as dokst preserving type)` |  |  |
| `ChangeNumber` |  | |  | `cast(docl.ChangeNumber as daenr preserving type)` |  |  |
| `ResponsibleUser` |  | |  | `cast(docl.ResponsiblePersonName as pph_dwnam preserving type)` |  |  |
| `_ProductionOrderType` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionOrderOperation` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_ResponsibleUser` | `I_User` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [0..1] |
| `_ProductionOrderOperation` | `I_ProductionOrderOperation_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedUser', '_ChangedUser', '_ResponsibleUser']
@Analytics.dataCategory: #FACT
@Analytics.technicalName: 'IPRODNORDDOCLINK'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderDocumentLink'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Document Link'
// CDS view for all document links attached to either production order header or operations.

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_ProductionOrderDocumentLink
  as select from P_MfgOrderDocInfoRecdObjLink as docl

    association [1..1] to I_ProductionOrderType        as _ProductionOrderType      on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
    association [1..1] to I_User                       as _ResponsibleUser          on  $projection.ResponsibleUser = _ResponsibleUser.UserID
--  SOT relations
    association to parent I_ProductionOrder            as _ProductionOrderHeader    on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
    association [0..1] to I_ProductionOrderSequence    as _ProductionOrderSequence  on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                    and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
    association [0..1] to I_ProductionOrderOperation_2 as _ProductionOrderOperation on  $projection.ProductionOrder          = _ProductionOrderOperation.ProductionOrder
                                                                                    and $projection.ProductionOrderSequence  = _ProductionOrderOperation.ProductionOrderSequence
                                                                                    and $projection.ProductionOrderOperation = _ProductionOrderOperation.ProductionOrderOperation                                                                       
                                                                                
{
      // Key
  key docl.LinkedSAPObjectKey                                       as LinkedSAPObjectKey,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocTypeStdVH', element: 'DocumentInfoRecordDocType' } } ]
      @ObjectModel.foreignKey.association: '_DocumentType'
  key cast(docl.DocumentType    as dokar     preserving type)       as DocumentType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocNmbrStdVH', element: 'DocumentInfoRecordDocNumber' } } ]
      @ObjectModel.foreignKey.association: '_DocumentNumber'
  key cast(docl.DocumentInfoRecord as doknr  preserving type)       as DocumentInfoRecord,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocPrtStdVH', element: 'DocumentInfoRecordDocPart' } } ]
      @ObjectModel.foreignKey.association: '_DocumentPart'
  key cast(docl.DocumentPart    as pph_doktl preserving type)       as DocumentPart,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocVersStdVH', element: 'DocumentInfoRecordDocVersion' } } ]
      @ObjectModel.foreignKey.association: '_DocumentVersion'
  key cast(docl.DocumentVersion as pph_dokvr preserving type)       as DocumentVersion,

      // Administrative Data
      @Semantics.systemDateTime.createdAt: true
      cast(docl.CreationDateTime  as hp_created_at preserving type) as CreationDateTime,
      @Semantics.user.createdBy: true
      cast(docl.CreatedByUser     as ernam         preserving type) as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(docl.ChangedDateTime   as hp_changed_at preserving type) as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      cast(docl.LastChangedByUser as aenam         preserving type) as LastChangedByUser,

      // Order Data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(docl.ManufacturingOrderType as vdm_prodnordertype preserving type)           as ProductionOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderHeader'
      cast(docl.ManufacturingOrder as vdm_manufacturingorder preserving type)           as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(docl.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)   as ProductionOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
      cast(docl.ManufacturingOrderOperation as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
 
      // Document Data
      @ObjectModel.foreignKey.association: '_DocumentStatus'
      cast(docl.InternalDocumentStatus as dokst preserving type)    as InternalDocumentStatus,
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      cast(docl.ChangeNumber as daenr preserving type)              as ChangeNumber,
--    @Semantics.user.responsible: true
      cast(docl.ResponsiblePersonName as pph_dwnam preserving type) as ResponsibleUser,

      // Associations
      _ProductionOrderType,
      _ProductionOrderHeader,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _ResponsibleUser,
      docl._DocumentNumber,
      docl._DocumentType,
      docl._DocumentVersion,
      docl._DocumentPart,
      docl._DocumentStatus,
      docl._DocumentText,
      docl._ChangeNumber,
      docl._CreatedUser,
      docl._ChangedUser
}
where
  docl.ManufacturingOrderCategory = '10';
```
