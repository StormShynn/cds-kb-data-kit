---
name: I_QUALITYMGMTCTRLKEY
description: "Qualitymgmtctrlkey"
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
# I_QUALITYMGMTCTRLKEY

**Qualitymgmtctrlkey**

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
