---
name: I_QUALITYCERTIFICATETYPE
description: Qualitycertificatetype
app_component: QM-CA-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityCertificateType` | `tq05.zgtyp` |
| `QualityCertificateTypeOID` | `case when I_MdiOidConfiguration.Context is initial then cast( tq05.zgtyp as qualitycertificatetypeoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq05.zgtyp ) as qualitycertificatetypeoid ) end` |
| `_QualityCertificateTypeT` | *Association* |

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
