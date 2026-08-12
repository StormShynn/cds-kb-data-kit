---
name: I_MNLACCRSACCRUALSUBOBJECT
description: "Mnlaccrsaccrualsubobject"
app_component: FI-GL-GL-AAC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-AAC
  - lob:Finance
---
# I_MNLACCRSACCRUALSUBOBJECT

**Mnlaccrsaccrualsubobject**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-AAC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccrualEngineAccrualObjectType` | ✓ | | `_Accrual` | `AccrualEngineAccrualObjectType` |  |  |
| `AccrualObjectLogicalSystem` | ✓ | | `_Accrual` | `AccrualObjectLogicalSystem` |  |  |
| `CompanyCode` | ✓ | | `_Accrual` | `CompanyCode` |  |  |
| `AccrualObject` | ✓ | | `_Accrual` | `AccrualObject` |  |  |
| `AccrualSubobject` | ✓ | | `_ManualAccrual` | `ref_subkey` |  |  |
| `ManualAccrualsAccrObjectType` |  | |  | `acac_objtype` |  |  |
| `ManualAccrualsAccrSubobjType` |  | |  | `acac_subobjtype` |  |  |
| `ManualAccrualsAccrObject` |  | |  | `acac_objnumber` |  |  |
| `AccrualObjectDescription` |  | |  | `text` |  |  |
| `PersonResponsible` |  | |  | `acac_resperson` |  |  |
| `PersonResponsibleName` |  | |  | `acac_resperson` |  |  |
| `AccrualObjectInternalID` |  | | `_Accrual` | `AccrualObjectInternalID` |  |  |
| `AccrualSubobjectInternalID` |  | | `_Accrual` | `AccrualSubobjectInternalID` |  |  |
| `AccrSubobjPrematureFinishDate` |  | | `_Accrual` | `AccrSubobjPrematureFinishDate` |  |  |
| `AccrSubobjPauseDate` |  | | `_Accrual` | `AccrSubobjPauseDate` |  |  |
| `AccrSubobjSuspensionDate` |  | | `_Accrual` | `AccrSubobjSuspensionDate` |  |  |
| `AccrSubobjectLifeCycleStatus` |  | | `_Accrual` | `AccrSubobjectLifeCycleStatus` |  |  |
| `AccrualSubobjectCreatedByUser` |  | | `_Accrual` | `AccrualSubobjectCreatedByUser` |  |  |
| `AccrualSubobjectCreationDate` |  | | `_Accrual` | `AccrualSubobjectCreationDate` |  |  |
| `AccrualSubobjectCreationTime` |  | | `_Accrual` | `AccrualSubobjectCreationTime` |  |  |
| `AccrSubobjLastChangedByUser` |  | | `_Accrual` | `AccrSubobjLastChangedByUser` |  |  |
| `AccrualSubobjectLastChangeDate` |  | | `_Accrual` | `AccrualSubobjectLastChangeDate` |  |  |
| `AccrualSubobjectLastChangeTime` |  | | `_Accrual` | `AccrualSubobjectLastChangeTime` |  |  |
| `AccrSubobjLastChangeDateTime` |  | | `_Accrual` | `AccrSubobjLastChangeDateTime` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IACACSO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Manual Accruals Accrual Subobject'
@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: [ #NONE ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view I_MnlAccrsAccrualSubobject
  as select from acac_objects                 as _ManualAccrual
    inner join   I_AccrEngineAccrualSubobject as _Accrual on  _Accrual.AccrualObjectLogicalSystem     = ''
                                                          and _Accrual.AccrualEngineAccrualObjectType = 'ACAC'
                                                          and _ManualAccrual.bukrs                    = _Accrual.CompanyCode
                                                          and _ManualAccrual.ref_key                  = _Accrual.AccrualObject
                                                          and _ManualAccrual.ref_subkey               = _Accrual.AccrualSubobject
{
      @ObjectModel.foreignKey.association: '_AccrObjectType'
  key _Accrual.AccrualEngineAccrualObjectType,
      @ObjectModel.foreignKey.association: '_AccrLogicalSystem'
  key _Accrual.AccrualObjectLogicalSystem,
      @ObjectModel.foreignKey.association: '_AccrCompanyCode'
  key _Accrual.CompanyCode      as CompanyCode,
      @ObjectModel.foreignKey.association: '_AccrObj'
  key _Accrual.AccrualObject    as AccrualObject,
  key _ManualAccrual.ref_subkey as AccrualSubobject,
      acac_objtype              as ManualAccrualsAccrObjectType,
      acac_subobjtype           as ManualAccrualsAccrSubobjType,
      acac_objnumber            as ManualAccrualsAccrObject,
      text                      as AccrualObjectDescription,
      acac_resperson            as PersonResponsible,
      acac_resperson            as PersonResponsibleName,
      _Accrual.AccrualObjectInternalID,
      _Accrual.AccrualSubobjectInternalID,
      _Accrual.AccrSubobjPrematureFinishDate,
      _Accrual.AccrSubobjPauseDate,
      _Accrual.AccrSubobjSuspensionDate,
      @ObjectModel.foreignKey.association: '_AccrLifeCycleStatus'
      _Accrual.AccrSubobjectLifeCycleStatus,

      /* admin infor */
      @Semantics.user.createdBy: true
      _Accrual.AccrualSubobjectCreatedByUser,
      @Semantics.systemDate.createdAt: true
      _Accrual.AccrualSubobjectCreationDate,
      @Semantics.systemTime.createdAt: true
      _Accrual.AccrualSubobjectCreationTime,
      @Semantics.user.lastChangedBy: true
      _Accrual.AccrSubobjLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _Accrual.AccrualSubobjectLastChangeDate,
      @Semantics.systemDate.lastChangedAt: true
      _Accrual.AccrualSubobjectLastChangeTime,
      /*Etag */
      @Semantics.systemDateTime.lastChangedAt: true
      _Accrual.AccrSubobjLastChangeDateTime,

      //Association
      _Accrual._AccrLifeCycleStatus,
      _Accrual._AccrObjectType,
      _Accrual._AccrLogicalSystem,
      _Accrual._AccrCompanyCode,
      _Accrual._AccrObj
}
```
