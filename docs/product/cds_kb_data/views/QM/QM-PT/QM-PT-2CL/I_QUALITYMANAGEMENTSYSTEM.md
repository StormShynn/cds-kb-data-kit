---
name: I_QUALITYMANAGEMENTSYSTEM
description: "Qualitymanagementsystem"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityManagementSystem` | ✓ | |  | `qssysfam` |  |  |
| `QltyMgmtSystIsCertified` |  | |  | `qssyszert` |  |  |
| `QltyMgmtSystValuation` |  | |  | `qssysbew` |  |  |
| `QualityManagementSystemOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial then cast( tq02b.qssysfam as qualitymanagementsystemoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq02b.qssysfam ) as qualitymanagementsystemoid ) end` |  |  |
| `_QltyMgmtSystemText` | | ✓ | | | | |

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
