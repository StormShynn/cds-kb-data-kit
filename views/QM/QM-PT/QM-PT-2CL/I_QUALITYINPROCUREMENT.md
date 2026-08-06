---
name: I_QUALITYINPROCUREMENT
description: Qualityinprocurement
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QUALITYINPROCUREMENT

**Qualityinprocurement**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `qinf.matnr` |
| key `QltyInProcmtIntID` | `cast(qinf.zaehl as vdm_qm_qltyinprocmtintid preserving type )` |
| `Supplier` | `qinf.lieferant` |
| `Plant` | `qinf.werk` |
| `MaterialRevisionLevel` | `cast( qinf.revlv as vdm_qm_revlv preserving type )` |
| `QltyInProcmtReleaseValidTo` | `qinf.frei_dat` |
| `QltyInProcmtRelQtyIsActive` | `cast( qinf.frei_mgkz as vdm_qfreimgkz preserving type )` |
| `BaseUnit` | `qinf.me` |
| `ReleasedQuantity` | `qinf.frei_mng` |
| `OrderedQuantity` | `qinf.best_mg` |
| `QltyInProcmtResetOnDate` | `qinf.dat_rueck` |
| `BlockReason` | `qinf.sperrgrund` |
| `ProcurementBlock` | `qinf.sperrfkt` |
| `QualityManagementSystem` | `qinf.qssysfam` |
| `QltyInProcmtCertfnValidTo` | `qinf.qssysdat` |
| `SupplierProcurementBlock` | `_Supplier.SupplierProcurementBlock` |
| `SuplrQualityManagementSystem` | `_Supplier.SuplrQualityManagementSystem` |
| `SuplrQltyInProcmtCertfnValidTo` | `_Supplier.SuplrQltyInProcmtCertfnValidTo` |
| `QltyInProcmtInspControl` | `qinf.noinsp` |
| `InspectionLotType` | `qinf.variabnahm` |
| `QltyInProcmtHasLongText` | `qinf.ltextkz` |
| `QltyInProcmtNoFurtherInsp` | `cast( qinf.noinspabn as vdm_qnoweabn preserving type )` |
| `QltyInProcmtLotCrtnLeadTime` | `qinf.vorlabn` |
| `IsDeleted` | `qinf.loekz` |
| `QltyInProcmtCertificateCtrl` | `qinf.certcontrol` |
| `QltyInProcmtHasAssuranceAgrmt` | `cast( qinf.qvvorh as vdm_qqsvvorh preserving type )` |
| `QltyInProcmtCurInspLot` | `qinf.plos` |
| `QltyInProcmtNextInspLot` | `qinf.plos2` |
| `ProdnPieceApprovalIsRequired` | `qinf.ppap_is_required` |
| `ProductionPieceApproval` | `qinf.ppap_id` |
| `ProductionPieceApprovalLevel` | `qinf.ppap_level` |
| `ProductionPieceApprovalStatus` | `qinf.ppap_status` |
| `StatusProfile` | `qinf.stsma` |
| `ControllingObject` | `qinf.objnr` |
| `CreatedByUser` | `qinf.ersteller` |
| `CreationDate` | `qinf.erstelldat` |
| `LastChangedByUser` | `qinf.aenderer` |
| `LastChangeDate` | `qinf.aenderdat` |
| `ChangedDateTime` | `case qinf.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qinf.changeddatetime end` |
| `Language` | `qinf.spras` |
| `LinkedSAPObjectKey` | `_DocObjKeyForQltyInProcmt.LinkedSAPObjectKey` |
| `DocumentInfoRecordDocType` | `cast( 'Q01' as qdokart preserving type )` |
| `_Plant` | *Association* |
| `_Material` | *Association* |
| `_ProductPlantQtManagement` | *Association* |
| `_Supplier` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_StatusProfile` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_Language` | *Association* |
| `_ProcurementBlock` | *Association* |
| `_SupplierProcurementBlock` | *Association* |
| `_QualityManagementSystem` | *Association* |
| `_SuplrQltyMgmtSystem` | *Association* |
| `_InspectionLotType` | *Association* |
| `_QltyInProcmtCurInspLot` | *Association* |
| `_QltyInProcmtNextInspLot` | *Association* |
| `_ControllingObject` | *Association* |
| `_QltyInProcmtInspControl` | *Association* |
| `_QltyInProcmtCertificateCtrl` | *Association* |
| `_QltyFirstArticleInsp` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_ProductPlantQtManagement` | `I_Productplantqtmanagement` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_StatusProfile` | `I_StatusProfile` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ProcurementBlock` | `I_ProcurementBlock` | [0..1] |
| `_SupplierProcurementBlock` | `I_ProcurementBlock` | [0..1] |
| `_QualityManagementSystem` | `I_QualityManagementSystem` | [0..1] |
| `_SuplrQltyMgmtSystem` | `I_QualityManagementSystem` | [0..1] |
| `_InspectionLotType` | `I_InspectionLotType` | [0..1] |
| `_QltyInProcmtCurInspLot` | `I_InspectionLot` | [0..1] |
| `_QltyInProcmtNextInspLot` | `I_InspectionLot` | [0..1] |
| `_ControllingObject` | `I_ControllingObject` | [0..1] |
| `_QltyInProcmtInspControl` | `I_QltyInProcmtInspControl` | [0..1] |
| `_QltyInProcmtCertificateCtrl` | `I_QltyInProcmtCertificateCtrl` | [0..1] |
| `_QltyFirstArticleInsp` | `I_QltyFirstArticleInsp` | [0..*] |
| `_Extension` | `E_QualityInProcurement` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IQLTYINPROCMT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Quality Info Record in Procurement'
@AccessControl.authorizationCheck: #CHECK
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.representativeKey: 'QltyInProcmtIntID'
@ObjectModel.sapObjectNodeType.name: 'PurchasingQualityInfoRecord'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER }

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions:true

@Metadata.ignorePropagatedAnnotations: true

// P_DocObjKeyForQltyInProcmt: used for building DocumentObjectKey

define view I_QualityInProcurement as select from qinf
    left outer to one join P_DocObjKeyForQltyInProcmt as _DocObjKeyForQltyInProcmt 
        on  qinf.zaehl = _DocObjKeyForQltyInProcmt.QltyInProcmtIntID
        and qinf.matnr = _DocObjKeyForQltyInProcmt.Material
        and qinf.werk  = _DocObjKeyForQltyInProcmt.Plant                
        and qinf.revlv = _DocObjKeyForQltyInProcmt.MaterialRevisionLevel   

  association [1..1] to I_Plant                         as _Plant                         on  $projection.Plant                       = _Plant.Plant
  association [1..1] to I_Material                      as _Material                      on  $projection.Material                    = _Material.Material
  association [1..1] to I_Productplantqtmanagement      as _ProductPlantQtManagement      on  $projection.Material                    = _ProductPlantQtManagement.Product
                                                                                          and $projection.Plant                       = _ProductPlantQtManagement.Plant
  association [0..1] to I_Supplier                      as _Supplier                      on  $projection.Supplier                    = _Supplier.Supplier
  association [0..1] to I_UnitOfMeasure                 as _UnitOfMeasure                 on  $projection.BaseUnit                    = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_StatusProfile                 as _StatusProfile                 on  $projection.StatusProfile               = _StatusProfile.StatusProfile
  association [0..1] to I_User                          as _CreatedByUser                 on  $projection.CreatedByUser               = _CreatedByUser.UserID
  association [0..1] to I_User                          as _LastChangedByUser             on  $projection.LastChangedByUser           = _LastChangedByUser.UserID
  association [0..1] to I_Language                      as _Language                      on  $projection.Language                    = _Language.Language
  association [0..1] to I_ProcurementBlock              as _ProcurementBlock              on  $projection.ProcurementBlock            = _ProcurementBlock.ProcurementBlock
  association [0..1] to I_ProcurementBlock              as _SupplierProcurementBlock      on  $projection.supplierprocurementblock    = _SupplierProcurementBlock.ProcurementBlock
  association [0..1] to I_QualityManagementSystem       as _QualityManagementSystem       on  $projection.QualityManagementSystem     = _QualityManagementSystem.QualityManagementSystem
  association [0..1] to I_QualityManagementSystem       as _SuplrQltyMgmtSystem           on  $projection.suplrqualitymanagementsystem = _SuplrQltyMgmtSystem.QualityManagementSystem
  association [0..1] to I_InspectionLotType             as _InspectionLotType             on  $projection.InspectionLotType           = _InspectionLotType.InspectionLotType
  association [0..1] to I_InspectionLot                 as _QltyInProcmtCurInspLot        on  $projection.QltyInProcmtCurInspLot      = _QltyInProcmtCurInspLot.InspectionLot
  association [0..1] to I_InspectionLot                 as _QltyInProcmtNextInspLot       on  $projection.QltyInProcmtNextInspLot     = _QltyInProcmtNextInspLot.InspectionLot
  association [0..1] to I_ControllingObject             as _ControllingObject             on  $projection.ControllingObject           = _ControllingObject.ControllingObject
  association [0..1] to I_QltyInProcmtInspControl       as _QltyInProcmtInspControl       on  $projection.QltyInProcmtInspControl     = _QltyInProcmtInspControl.QltyInProcmtInspControl
  association [0..1] to I_QltyInProcmtCertificateCtrl   as _QltyInProcmtCertificateCtrl   on  $projection.QltyInProcmtCertificateCtrl = _QltyInProcmtCertificateCtrl.QltyInProcmtCertificateCtrl
  association [0..*] to I_QltyFirstArticleInsp          as _QltyFirstArticleInsp          on  $projection.Material                    = _QltyFirstArticleInsp.Material
                                                                                         and  $projection.QltyInProcmtIntID           = _QltyFirstArticleInsp.QltyInProcmtIntID
  //Extension
  association [1..1] to E_QualityInProcurement          as _Extension                     on  $projection.Material = _Extension.Material
                                                                                          and $projection.QltyInProcmtIntID = _Extension.QltyInProcmtIntID
{
  @ObjectModel.foreignKey.association: '_Material'
  key qinf.matnr            as Material,
  key cast(qinf.zaehl as vdm_qm_qltyinprocmtintid preserving type ) as QltyInProcmtIntID,
  
  @ObjectModel.foreignKey.association: '_Supplier'
  qinf.lieferant        as Supplier,
  @ObjectModel.foreignKey.association: '_Plant'
  qinf.werk             as Plant,
  cast( qinf.revlv as vdm_qm_revlv preserving type ) as MaterialRevisionLevel,

  //@Semantics.businessDate.to: true
  qinf.frei_dat         as QltyInProcmtReleaseValidTo,
  cast( qinf.frei_mgkz as vdm_qfreimgkz preserving type )        as QltyInProcmtRelQtyIsActive,
  @Semantics.unitOfMeasure:true
  qinf.me               as BaseUnit,
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  qinf.frei_mng         as ReleasedQuantity,
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  qinf.best_mg          as OrderedQuantity,
  @Semantics.businessDate.at: true
  qinf.dat_rueck        as QltyInProcmtResetOnDate,
  @Semantics.text: true
  qinf.sperrgrund       as BlockReason,
  @ObjectModel.foreignKey.association: '_ProcurementBlock'
  qinf.sperrfkt         as ProcurementBlock,
  @ObjectModel.foreignKey.association: '_QualityManagementSystem'
  qinf.qssysfam         as QualityManagementSystem,
  qinf.qssysdat         as QltyInProcmtCertfnValidTo,
  @ObjectModel.foreignKey.association: '_SupplierProcurementBlock'
  _Supplier.SupplierProcurementBlock,
  @ObjectModel.foreignKey.association: '_SuplrQltyMgmtSystem'
  _Supplier.SuplrQualityManagementSystem,
  _Supplier.SuplrQltyInProcmtCertfnValidTo,
  @ObjectModel.foreignKey.association: '_QltyInProcmtInspControl'
  qinf.noinsp           as QltyInProcmtInspControl,
  @ObjectModel.foreignKey.association: '_InspectionLotType'
  qinf.variabnahm       as InspectionLotType,
  @Semantics.booleanIndicator: true
  qinf.ltextkz          as QltyInProcmtHasLongText,
  cast( qinf.noinspabn as vdm_qnoweabn preserving type )        as QltyInProcmtNoFurtherInsp,
  qinf.vorlabn          as QltyInProcmtLotCrtnLeadTime,
  @Semantics.booleanIndicator: true
  qinf.loekz            as IsDeleted,
  @ObjectModel.foreignKey.association: '_QltyInProcmtCertificateCtrl'
  qinf.certcontrol      as QltyInProcmtCertificateCtrl,
  cast( qinf.qvvorh as vdm_qqsvvorh preserving type )           as QltyInProcmtHasAssuranceAgrmt,
  qinf.plos             as QltyInProcmtCurInspLot,
  qinf.plos2            as QltyInProcmtNextInspLot,
  qinf.ppap_is_required as ProdnPieceApprovalIsRequired,
  qinf.ppap_id          as ProductionPieceApproval,
  qinf.ppap_level       as ProductionPieceApprovalLevel,
  qinf.ppap_status      as ProductionPieceApprovalStatus,
  qinf.stsma            as StatusProfile,
  qinf.objnr            as ControllingObject,

  @Semantics.user.createdBy: true
  qinf.ersteller        as CreatedByUser,
  @Semantics.systemDate.createdAt: true
  qinf.erstelldat       as CreationDate,
  @Semantics.user.lastChangedBy: true
  qinf.aenderer         as LastChangedByUser,
  @Semantics.systemDate.lastChangedAt: true
  qinf.aenderdat        as LastChangeDate,
  case qinf.changeddatetime
    when 0 then cast( '19000101010101' as tzntstmps )
    else qinf.changeddatetime end  as ChangedDateTime,
  //@Semantics.language: true
  qinf.spras            as Language, // or QINF.sprache

  _DocObjKeyForQltyInProcmt.LinkedSAPObjectKey as LinkedSAPObjectKey,
  cast( 'Q01' as qdokart preserving type ) as DocumentInfoRecordDocType,

  /*Assosiations*/
  _Material,
  _ProductPlantQtManagement,
  _Plant,
  _Supplier,
  _UnitOfMeasure,
  _ProcurementBlock,
  _SupplierProcurementBlock,
  _QualityManagementSystem,
  _SuplrQltyMgmtSystem,
  _ControllingObject,
  _QltyInProcmtInspControl,
  _QltyInProcmtCertificateCtrl,
  _QltyFirstArticleInsp,
  _InspectionLotType,
  _QltyInProcmtCurInspLot,
  _QltyInProcmtNextInspLot,
  _StatusProfile,
  _CreatedByUser,
  _LastChangedByUser,
  _Language
}
```
