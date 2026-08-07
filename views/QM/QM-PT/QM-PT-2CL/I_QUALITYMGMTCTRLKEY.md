---
name: I_QUALITYMGMTCTRLKEY
description: Qualitymgmtctrlkey
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
# I_QUALITYMGMTCTRLKEY

**Qualitymgmtctrlkey**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityMgmtCtrlKey` | ✓ | |  | `qm_pur` |  |  |
| `SupplierReleaseIsRequired` |  | |  | `lieffrei` |  |  |
| `QualityCertificateIsRequired` |  | |  | `zgerf` |  |  |
| `QualityManagementControlKeyOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial then cast( tq08.qm_pur as qualitymanagementcontrolkeyoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq08.qm_pur ) as qualitymanagementcontrolkeyoid ) end` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_QualityMgmtCtrlKeyText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Control Key for Quality Management'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IQMCONTROLKEY'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION    
@ObjectModel.representativeKey: 'QualityMgmtCtrlKey'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'QualityManagementControlKey'
//@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['QualityManagementControlKeyOID'] }]
define view entity I_QualityMgmtCtrlKey
  as select from           tq08
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '5648' // OTC of SOT definition QualityManagementControlKey in GTNC
  association [1..*] to I_QualityMgmtCtrlKeyText as _Text on $projection.QualityMgmtCtrlKey = _Text.QualityMgmtCtrlKey
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tq08.qm_pur   as QualityMgmtCtrlKey,
      
      tq08.lieffrei as SupplierReleaseIsRequired,
      @Semantics.booleanIndicator:true
      tq08.zgerf    as QualityCertificateIsRequired, 

      @ObjectModel.sort.enabled:false
      @ObjectModel.filter.enabled:false
      case when I_MdiOidConfiguration.Context is initial then
      // Context ID is not specified
        cast( tq08.qm_pur as qualitymanagementcontrolkeyoid )
      when I_MdiOidConfiguration.Context is not initial then
      // Context ID is specified
        cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq08.qm_pur ) as qualitymanagementcontrolkeyoid )
      end           as QualityManagementControlKeyOID,

      //Associations
      _Text
}
```
