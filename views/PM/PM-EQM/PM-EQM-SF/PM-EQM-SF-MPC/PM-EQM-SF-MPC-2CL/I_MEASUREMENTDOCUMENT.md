---
name: I_MEASUREMENTDOCUMENT
description: Measurementdocument
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - document
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASUREMENTDOCUMENT

**Measurementdocument**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MeasurementDocument` | `mdocm` |
| `MeasuringPoint` | `point` |
| `MsmtRdngDate` | `idate` |
| `MsmtRdngTime` | `itime` |
| `MeasurementReadingDateTime` | `cast ( dats_tims_to_tstmp( idate, itime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as timestamp )` |
| `MsmtRdngInvertedDateTime` | `invts` |
| `MsmtRdngIsForCounter` | `cntrg` |
| `MeasurementDocumentText` | `mdtxt` |
| `Language` | `mlang` |
| `MeasurementDocumentHasLongText` | `kzltx` |
| `MsmtRdngByUser` | `readr` |
| `CreationDate` | `erdat` |
| `CreationTime` | `eruhr` |
| `MsmtDocumentCreationDateTime` | `cast ( dats_tims_to_tstmp( erdat, eruhr, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as timestamp )` |
| `CreatedByUser` | `ernam` |
| `LastChangeDate` | `aedat` |
| `LastChangedByUser` | `aenam` |
| `SingleLevelDeletionLogicFlag` | `lvorm` |
| `MeasurementDocumentOrigin` | `gener` |
| `InspectionLot` | `prueflos` |
| `InspectionCharacteristic` | `merknr` |
| `MsmtRdngSourceMeasurementDoc` | `rootd` |
| `ProdnRsceToolTypeCode` | `tolty` |
| `ProdnRsceToolInternalID` | `tolid` |
| `MsmtDocumentReferredOrder` | `woobj` |
| `MsmtIsDoneAfterTaskCompltn` | `docaf` |
| `MeasurementReading` | `readg` |
| `MsmtRdngIsEntered` | `readgi` |
| `MeasurementReadingInEntryUoM` | `recdv` |
| `MsmtReadingInEntryUoMIsEntered` | `recdvi` |
| `MeasurementReadingEntryUoM` | `recdu` |
| `MsmtDocumentSIUnitOfMeasure` | `_MeasuringPoint._UnitOfMeasure._Dimension.UnitOFMeasureSiUnit` |
| `MeasurementCounterReading` | `cntrr` |
| `MsmtCntrRdngIsEntered` | `cntrri` |
| `MsmtCounterReadingDifference` | `cdiff` |
| `MsmtCntrReadingDiffIsEntered` | `idiff` |
| `MsmtCounterReadingIsReplaced` | `exchg` |
| `TotalMsmtRdngIsSetExternally` | `totex` |
| `MeasurementDocumentCatalogType` | `codct` |
| `MeasurementDocumentCodeGroup` | `codgr` |
| `MsmtValuationCode` | `vlcod` |
| `MsmtValuationCodeVersNmbr` | `cvers` |
| `MsmtRdngStatus` | `prest` |
| `MsmtRdngIsReversed` | `cancl` |
| `InspectionValuationResult` | `mbewertg` |
| `MsmtRdngIsIntervalDoc` | `intvl` |
| `MsmtRdngIntervalStartDate` | `idat1` |
| `MsmtRdngIntervalStartTime` | `itim1` |
| `MaintOrderOperationInternalID` | `woob1` |
| `_MeasuringPoint` | *Association* |
| `_Language` | *Association* |
| `_InspectionLot` | *Association* |
| `_MsmtRdngSourceMeasurementDoc` | *Association* |
| `_ControllingObject` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_MsmtDocumentCatalogType` | *Association* |
| `_MeasurementDocumentCodeGroup` | *Association* |
| `_MeasurementValuationCode` | *Association* |
| `_MaintenanceOrder` | *Association* |
| `_MaintenanceNotification` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MeasuringPoint` | `I_MeasuringPoint` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_InspectionLot` | `I_InspectionLot` | [0..1] |
| `_MsmtRdngSourceMeasurementDoc` | `I_MeasurementDocument` | [0..1] |
| `_ControllingObject` | `I_ControllingObject` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_MsmtDocumentCatalogType` | `I_Inspectioncatalog` | [0..1] |
| `_MeasurementDocumentCodeGroup` | `I_InspectionCodeGroup` | [0..1] |
| `_MeasurementValuationCode` | `I_InspectionCode` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceNotification` | `I_MaintenanceNotification` | [0..1] |
| `_MeasurementDocumentExtension` | `E_MeasurementDocument` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Measurement Document'
@ObjectModel.representativeKey: 'MeasurementDocument'
@Analytics.technicalName: 'IMEASDOC'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_MeasurementDocument
  as select from imrg
  association [1..1] to I_MeasuringPoint          as _MeasuringPoint               on  $projection.MeasuringPoint = _MeasuringPoint.MeasuringPoint
  association [0..1] to I_Language                as _Language                     on  _Language.Language = $projection.Language
  association [0..1] to I_InspectionLot           as _InspectionLot                on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [0..1] to I_MeasurementDocument     as _MsmtRdngSourceMeasurementDoc on  $projection.MsmtRdngSourceMeasurementDoc = _MsmtRdngSourceMeasurementDoc.MeasurementDocument
  association [0..1] to I_ControllingObject       as _ControllingObject            on  $projection.MsmtDocumentReferredOrder = _ControllingObject.ControllingObject
  association [0..1] to I_UnitOfMeasure           as _UnitOfMeasure                on  $projection.MeasurementReadingEntryUoM = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_Inspectioncatalog       as _MsmtDocumentCatalogType      on  $projection.MeasurementDocumentCatalogType = _MsmtDocumentCatalogType.InspectionCatalog
  association [0..1] to I_InspectionCodeGroup     as _MeasurementDocumentCodeGroup on  $projection.MeasurementDocumentCatalogType = _MeasurementDocumentCodeGroup.InspectionCatalog
                                                                                   and $projection.MeasurementDocumentCodeGroup   = _MeasurementDocumentCodeGroup.InspectionCodeGroup
  association [0..1] to I_InspectionCode          as _MeasurementValuationCode     on  $projection.MeasurementDocumentCatalogType = _MeasurementValuationCode.InspectionCatalog
                                                                                   and $projection.MeasurementDocumentCodeGroup   = _MeasurementValuationCode.InspectionCodeGroup
                                                                                   and $projection.MsmtValuationCode              = _MeasurementValuationCode.InspectionCode
  association [0..1] to I_MaintenanceOrder        as _MaintenanceOrder             on  $projection.MsmtDocumentReferredOrder = _MaintenanceOrder.MaintenanceOrderInternalID
  association [0..1] to I_MaintenanceNotification as _MaintenanceNotification      on  $projection.MsmtDocumentReferredOrder = _MaintenanceNotification.MaintNotifInternalID

-- Extensions, do not expose as association:
  association [0..1] to E_MeasurementDocument as _MeasurementDocumentExtension on $projection.MeasurementDocument = _MeasurementDocumentExtension.MeasurementDocument  

{
      @ObjectModel.text.element: [ 'MeasurementDocumentText']
  key mdocm                                                         as MeasurementDocument,

      @ObjectModel.foreignKey.association: '_MeasuringPoint'
      point                                                         as MeasuringPoint,

      idate                                                         as MsmtRdngDate,

      itime                                                         as MsmtRdngTime,

      @Semantics.dateTime: true
      cast ( dats_tims_to_tstmp( idate, itime, abap_system_timezone( $session.client,'NULL' ),
              $session.client, 'NULL' ) as timestamp )              as MeasurementReadingDateTime,

      invts                                                         as MsmtRdngInvertedDateTime,

      cntrg                                                         as MsmtRdngIsForCounter,

      @Semantics.text: true
      mdtxt                                                         as MeasurementDocumentText,

      @ObjectModel.foreignKey.association: '_Language'
      mlang                                                         as Language,

      kzltx                                                         as MeasurementDocumentHasLongText,

      readr                                                         as MsmtRdngByUser,

      @Semantics.systemDate.createdAt: true
      erdat                                                         as CreationDate,

      eruhr                                                         as CreationTime,

      @Semantics.dateTime: true
      cast ( dats_tims_to_tstmp( erdat, eruhr, abap_system_timezone( $session.client,'NULL' ),
                         $session.client, 'NULL' )  as timestamp )  as MsmtDocumentCreationDateTime,

      @Semantics.user.createdBy: true
      ernam                                                         as CreatedByUser,

      @Semantics.systemDate.lastChangedAt: true
      aedat                                                         as LastChangeDate,

      @Semantics.user.lastChangedBy: true
      aenam                                                         as LastChangedByUser,

      lvorm                                                         as SingleLevelDeletionLogicFlag,

      gener                                                         as MeasurementDocumentOrigin,

      @ObjectModel.foreignKey.association: '_InspectionLot'
      prueflos                                                      as InspectionLot,

      merknr                                                        as InspectionCharacteristic,

      @ObjectModel.foreignKey.association: '_MsmtRdngSourceMeasurementDoc'
      rootd                                                         as MsmtRdngSourceMeasurementDoc,

      tolty                                                         as ProdnRsceToolTypeCode,

      tolid                                                         as ProdnRsceToolInternalID,

      @ObjectModel.foreignKey.association: '_ControllingObject'
      woobj                                                         as MsmtDocumentReferredOrder,

      docaf                                                         as MsmtIsDoneAfterTaskCompltn,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      readg                                                         as MeasurementReading,

      readgi                                                        as MsmtRdngIsEntered,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      recdv                                                         as MeasurementReadingInEntryUoM,

      recdvi                                                        as MsmtReadingInEntryUoMIsEntered,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      recdu                                                         as MeasurementReadingEntryUoM,

      _MeasuringPoint._UnitOfMeasure._Dimension.UnitOFMeasureSiUnit as MsmtDocumentSIUnitOfMeasure,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      cntrr                                                         as MeasurementCounterReading,

      cntrri                                                        as MsmtCntrRdngIsEntered,

      @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
      cdiff                                                         as MsmtCounterReadingDifference,

      idiff                                                         as MsmtCntrReadingDiffIsEntered,

      exchg                                                         as MsmtCounterReadingIsReplaced,

      totex                                                         as TotalMsmtRdngIsSetExternally,

      @ObjectModel.foreignKey.association: '_MsmtDocumentCatalogType'
      codct                                                         as MeasurementDocumentCatalogType,

      @ObjectModel.foreignKey.association: '_MeasurementDocumentCodeGroup'
      codgr                                                         as MeasurementDocumentCodeGroup,

      @ObjectModel.foreignKey.association: '_MeasurementValuationCode'
      vlcod                                                         as MsmtValuationCode,

      cvers                                                         as MsmtValuationCodeVersNmbr,

      prest                                                         as MsmtRdngStatus,

      cancl                                                         as MsmtRdngIsReversed,

      mbewertg                                                      as InspectionValuationResult,

      @Semantics.booleanIndicator
      intvl                                                         as MsmtRdngIsIntervalDoc,

      idat1                                                         as MsmtRdngIntervalStartDate,

      itim1                                                         as MsmtRdngIntervalStartTime,

      woob1                                                         as MaintOrderOperationInternalID,
      
      // Propagate association(s)
      _MeasuringPoint,
      _Language,
      _InspectionLot,
      _MsmtRdngSourceMeasurementDoc,
      _ControllingObject,
      _UnitOfMeasure,
      _MsmtDocumentCatalogType,
      _MeasurementDocumentCodeGroup,
      _MeasurementValuationCode,
      _MaintenanceOrder,
      _MaintenanceNotification


}
```
