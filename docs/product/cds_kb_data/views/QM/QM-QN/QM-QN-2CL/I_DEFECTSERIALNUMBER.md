---
name: I_DEFECTSERIALNUMBER
description: "Serial Number in Defect"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value
semantic_en: "Serial Number in Defect"
semantic_vi: "Serial Number in Defect — CDS view cơ bản (transactional data) dựa trên qmfe_affcdobjsn."
keywords:
  - "serial"
  - "number"
  - "defect"
  - "internal"
  - "dfct"
  - "nmbr"
  - "sequential"
  - "equipment"
tags:
  - QM
  - component:QM-QN-2CL
  - interface-view
  - lob:quality management
  - QM-QN
  - QM-QN-2CL
---
# I_DEFECTSERIALNUMBER

**Serial Number in Defect**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectInternalID` | ✓ | |  | `cast( qmnum as qdefectinternalid preserving type )` | `CHAR(12)` | Internal Defect ID |
| `DfctSerialNmbrSequentialNumber` | ✓ | |  | `cast( srlnmbrcntr as qfdefectsncntr preserving type )` | `INT2(5)` | Counter of Serial Number in a Defect |
| `Defect` |  | |  | `cast( substring(qmnum,2,11) as qdefectid preserving type )` | `CHAR(11)` | Defect Number |
| `SerialNumber` |  | |  | `serialnumber` | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  | `equnr` | `CHAR(18)` | Equipment Number |
| `SerialNumberAssignmentDateTime` |  | |  | `assignmdatetime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_Defect` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Defect` | `I_Defect` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Serial Number in Defect'
@Metadata.ignorePropagatedAnnotations: true

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
  supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE,
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  representativeKey: 'DfctSerialNmbrSequentialNumber',
  semanticKey: [ 'Defect', 'DfctSerialNmbrSequentialNumber'],
  sapObjectNodeType.name: 'DefectSerialNumber'
}

define view entity I_DefectSerialNumber
  as select from qmfe_affcdobjsn

  association [1..1] to I_Defect as _Defect on $projection.DefectInternalID = _Defect.DefectInternalID
{
      @ObjectModel.foreignKey.association: '_Defect'
  key cast( qmnum as qdefectinternalid preserving type )         as DefectInternalID,
  key cast( srlnmbrcntr as qfdefectsncntr preserving type )      as DfctSerialNmbrSequentialNumber,
      // Use external Defect Id as part of the semantic key
      cast( substring(qmnum,2,11) as qdefectid preserving type ) as Defect,
      serialnumber                                               as SerialNumber,
      equnr                                                      as Equipment,
      assignmdatetime                                            as SerialNumberAssignmentDateTime,

      /* Associations */
      _Defect
}
where
      qmnum      like '$%'
  and fenum      =    '0000'
  and objcounter =    0
```
