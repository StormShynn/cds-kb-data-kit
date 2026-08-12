---
name: I_QUALITYCERTIFICATETYPE
description: "Qualitycertificatetype"
app_component: QM-CA-2CL
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
  - QM-CA
  - interface-view
  - component:QM-CA-2CL
  - lob:Quality Management
---
# I_QUALITYCERTIFICATETYPE

**Qualitycertificatetype**

| Property | Value |
|---|---|
| App Component | `QM-CA-2CL` |
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
| `QualityCertificateType` | ✓ | |  | `zgtyp` |  |  |
| `QualityCertificateTypeOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial then cast( tq05.zgtyp as qualitycertificatetypeoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq05.zgtyp ) as qualitycertificatetypeoid ) end` |  |  |
| `_QualityCertificateTypeT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityCertificateTypeT` | `I_QualityCertificateTypeT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Certificate Type'
@ObjectModel.representativeKey: 'QualityCertificateType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IQLTYCERTTYPE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'QualityCertificateType'
//@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['QualityCertificateTypeOID'] }]
define view entity I_QualityCertificateType
  as select from           tq05
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '5650' // OTC of SOT definition QualityCertificateType in GTNC
  association [0..*] to I_QualityCertificateTypeT as _QualityCertificateTypeT on $projection.QualityCertificateType = _QualityCertificateTypeT.QualityCertificateType
{

      @ObjectModel.text.association: '_QualityCertificateTypeT'
  key tq05.zgtyp as QualityCertificateType,

      @ObjectModel.sort.enabled:false
      @ObjectModel.filter.enabled:false
      case when I_MdiOidConfiguration.Context is initial then
      // Context ID is not specified
          cast( tq05.zgtyp as qualitycertificatetypeoid )
        when I_MdiOidConfiguration.Context is not initial then
      // Context ID is specified
          cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq05.zgtyp ) as qualitycertificatetypeoid )
      end        as QualityCertificateTypeOID,

      _QualityCertificateTypeT
}
```
