---
name: I_QUALITYMANAGEMENTSYSTEM
description: Qualitymanagementsystem
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
# I_QUALITYMANAGEMENTSYSTEM

**Qualitymanagementsystem**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityManagementSystem` | `tq02b.qssysfam` |
| `QltyMgmtSystIsCertified` | `tq02b.qssyszert` |
| `QltyMgmtSystValuation` | `tq02b.qssysbew` |
| `QualityManagementSystemOID` | `case when I_MdiOidConfiguration.Context is initial then cast( tq02b.qssysfam as qualitymanagementsystemoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq02b.qssysfam ) as qualitymanagementsystemoid ) end` |
| `_QltyMgmtSystemText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMgmtSystemText` | `I_QltyMgmtSystemText` | [1..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IQLTYMGMTSYST',
    preserveKey: true,
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Quality Management System'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'QualityManagementSystem'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'QualityManagementSystem'
//@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['QualityManagementSystemOID'] }]
define view I_QualityManagementSystem
  as select from           tq02b
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '5651' // OTC of SOT definition QualityManagementSystem in GTNC

  association [1..*] to I_QltyMgmtSystemText as _QltyMgmtSystemText on $projection.QualityManagementSystem = _QltyMgmtSystemText.QualityManagementSystem
{
  @ObjectModel.text.association: '_QltyMgmtSystemText'
  key tq02b.qssysfam  as QualityManagementSystem,
      tq02b.qssyszert as QltyMgmtSystIsCertified,
      tq02b.qssysbew  as QltyMgmtSystValuation,

      @ObjectModel.sort.enabled:false
      @ObjectModel.filter.enabled:false
      case when I_MdiOidConfiguration.Context is initial then
      // Context ID is not specified
          cast( tq02b.qssysfam as qualitymanagementsystemoid )
        when I_MdiOidConfiguration.Context is not initial then
      // Context ID is specified
          cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq02b.qssysfam ) as qualitymanagementsystemoid )
      end             as QualityManagementSystemOID,

      /* Associations */
      _QltyMgmtSystemText
}
```
