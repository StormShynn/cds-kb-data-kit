---
name: I_ENTPROJELMNTDLVBRLTYPETEXT
description: "Entprojelmntdlvbrltypetext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTDLVBRLTYPETEXT

**Entprojelmntdlvbrltypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `EntProjElmntDeliverableType` | ✓ | |  | `cast ( substring( ResourceID.resource_id, 1, 6 ) as /s4ppm/tv_entprojdlvbrltype preserving type )` |  |  |
| `EntProjElmntDlvbrlTypeText` |  | |  | `Ktext` |  |  |
| `_Language` | | ✓ | | | | |
| `_DeliverableType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{ representativeKey: 'EntProjElmntDeliverableType',
               dataCategory: #TEXT,
               usageType: {
               serviceQuality: #A,
               sizeCategory:   #S,
               dataClass:      #CUSTOMIZING},
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,  #EXTRACTION_DATA_SOURCE]}

@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction.enabled: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Search.searchable: true
@EndUserText.label: 'Deliverable Type for Ent Proj Elmnts - Txt'
define view entity I_EntProjElmntDlvbrlTypeText
  as select from P_EntProjElmntDlvTypeTextCode as DlvTypeCode
    inner join   /cpd/c_map_resid as ResourceID on ResourceID.resource_id = DlvTypeCode.Lstar
  association        to parent I_EntProjElmntDlvbrlType as _DeliverableType on $projection.EntProjElmntDeliverableType = _DeliverableType.EntProjElmntDeliverableType
  association [0..1] to I_Language                      as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DlvTypeCode.Language                                                                              as Language,
      @ObjectModel.foreignKey.association: '_DeliverableType'
      @ObjectModel.text.element: ['EntProjElmntDlvbrlTypeText']
  key cast ( substring( ResourceID.resource_id, 1, 6 ) as /s4ppm/tv_entprojdlvbrltype preserving type ) as EntProjElmntDeliverableType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      DlvTypeCode.Ktext                                                                                 as EntProjElmntDlvbrlTypeText,
      _DeliverableType,
      _Language
}
where
      ResourceID.resource_type_id = '0SRV'
```
