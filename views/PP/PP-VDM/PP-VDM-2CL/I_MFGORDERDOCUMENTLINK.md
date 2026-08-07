---
name: I_MFGORDERDOCUMENTLINK
description: "Mfgorderdocumentlink"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - document
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERDOCUMENTLINK

**Mfgorderdocumentlink**

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
| `MfgOrderLinkedObjType` |  | |  | `cast(docl.MfgOrderLinkedObjType as pord_doclt preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  | `cast(docl.ManufacturingOrderType as aufart preserving type)` |  |  |
| `ManufacturingOrder` |  | |  | `cast(docl.ManufacturingOrder as co_aufnr preserving type)` |  |  |
| `ManufacturingOrderSequence` |  | |  | `cast(docl.ManufacturingOrderSequence as plnfolge preserving type)` |  |  |
| `ManufacturingOrderOperation` |  | |  | `cast(docl.ManufacturingOrderOperation as vdm_vornr preserving type)` |  |  |
| `InternalDocumentStatus` |  | |  | `cast(docl.InternalDocumentStatus as dokst preserving type)` |  |  |
| `ChangeNumber` |  | |  | `cast(docl.ChangeNumber as daenr preserving type)` |  |  |
| `ResponsiblePersonName` |  | |  | `cast(docl.ResponsiblePersonName as pph_dwnam preserving type)` |  |  |
| `_MfgOrderSequence` | | ✓ | | | | |
| `_MfgOrderOperation` | | ✓ | | | | |
| `_DocumentOriginal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderSequence` | `I_ManufacturingOrderSequence` | [0..1] |
| `_MfgOrderOperation` | `I_MfgOrderOperationBySemKey` | [0..1] |
| `_DocumentOriginal` | `I_MfgOrderDocumentLinkOriginal` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedUser', '_ChangedUser']
@Analytics.dataCategory: #FACT
@Analytics.technicalName: 'IMFGORDERDOCLINK'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderDocumentLink'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Document Link'
// CDS view for all document links attached to either manufacturing order header or operations.

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_MfgOrderDocumentLink
  as select from P_MfgOrderDocInfoRecdObjLink as docl

  association [0..1] to I_ManufacturingOrderSequence   as _MfgOrderSequence  on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder
                                                                             and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
  association [0..1] to I_MfgOrderOperationBySemKey    as _MfgOrderOperation on  $projection.ManufacturingOrder          = _MfgOrderOperation.ManufacturingOrder
                                                                             and $projection.ManufacturingOrderSequence  = _MfgOrderOperation.ManufacturingOrderSequence
                                                                             and $projection.ManufacturingOrderOperation = _MfgOrderOperation.ManufacturingOrderOperation
-- to child: Original
  association [0..*] to I_MfgOrderDocumentLinkOriginal as _DocumentOriginal  on  $projection.DocumentType       = _DocumentOriginal.DocumentInfoRecordDocType
                                                                             and $projection.DocumentPart       = _DocumentOriginal.DocumentInfoRecordDocPart
                                                                             and $projection.DocumentInfoRecord = _DocumentOriginal.DocumentInfoRecordDocNumber
                                                                             and $projection.DocumentVersion    = _DocumentOriginal.DocumentInfoRecordDocVersion
{
      // Key
  key docl.LinkedSAPObjectKey                                 as LinkedSAPObjectKey,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocTypeStdVH', element: 'DocumentInfoRecordDocType' } } ]
      @ObjectModel.foreignKey.association: '_DocumentType'
  key cast(docl.DocumentType    as dokar     preserving type) as DocumentType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocNmbrStdVH', element: 'DocumentInfoRecordDocNumber' } } ]
      @ObjectModel.foreignKey.association: '_DocumentNumber'
  key cast(docl.DocumentInfoRecord as doknr  preserving type) as DocumentInfoRecord,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocPrtStdVH', element: 'DocumentInfoRecordDocPart' } } ]
      @ObjectModel.foreignKey.association: '_DocumentPart'
  key cast(docl.DocumentPart    as pph_doktl preserving type) as DocumentPart,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DocInfoRecdDocVersStdVH', element: 'DocumentInfoRecordDocVersion' } } ]
      @ObjectModel.foreignKey.association: '_DocumentVersion'
  key cast(docl.DocumentVersion as pph_dokvr preserving type) as DocumentVersion,

      // Administrative Data
      @Semantics.systemDateTime.createdAt: true
      cast(docl.CreationDateTime  as hp_created_at preserving type) as CreationDateTime,
      @Semantics.user.createdBy: true
      cast(docl.CreatedByUser     as ernam         preserving type) as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      cast(docl.ChangedDateTime   as hp_changed_at preserving type) as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      cast(docl.LastChangedByUser as aenam         preserving type) as LastChangedByUser,

      // Mfg Order Data
      cast(docl.MfgOrderLinkedObjType as pord_doclt preserving type)      as MfgOrderLinkedObjType,
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      docl.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(docl.ManufacturingOrderType as aufart preserving type)         as ManufacturingOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
      cast(docl.ManufacturingOrder as co_aufnr preserving type)           as ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_MfgOrderSequence'
      cast(docl.ManufacturingOrderSequence  as plnfolge  preserving type) as ManufacturingOrderSequence,
      @ObjectModel.foreignKey.association: '_MfgOrderOperation'
      cast(docl.ManufacturingOrderOperation as vdm_vornr preserving type) as ManufacturingOrderOperation,
 
      // Document Data
      @ObjectModel.foreignKey.association: '_DocumentStatus'
      cast(docl.InternalDocumentStatus as dokst preserving type)          as InternalDocumentStatus,
      @ObjectModel.foreignKey.association: '_ChangeNumber'
      cast(docl.ChangeNumber as daenr preserving type)                    as ChangeNumber,
--    @Semantics.user.responsible: true
      cast(docl.ResponsiblePersonName as pph_dwnam preserving type)       as ResponsiblePersonName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      docl._MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _DocumentOriginal,
      _MfgOrderSequence,
      _MfgOrderOperation,
      docl._MfgOrderCategory,
      docl._MfgOrderType,
      docl._DocumentNumber,
      docl._DocumentType,
      docl._DocumentVersion,
      docl._DocumentPart,
      docl._DocumentStatus,
      docl._DocumentText,
      docl._ChangeNumber,
      docl._CreatedUser,
      docl._ChangedUser

};
```
