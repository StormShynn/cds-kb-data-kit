---
name: I_MATLQUALITYAUTHGROUP
description: Matlqualityauthgroup
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
# I_MATLQUALITYAUTHGROUP

**Matlqualityauthgroup**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatlQualityAuthorizationGroup` | ✓ | |  | `cast( tq01b.qmatauth as vdm_qmatauth preserving type )` |  |  |
| `MatlQMAuthorizationGroupOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial then cast( tq01b.qmatauth as matlqmauthorizationgroupoid ) when I_MdiOidConfiguration.Context is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq01b.qmatauth ) as matlqmauthorizationgroupoid ) end` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Matlqualityauthgrouptext` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Material Authzn Group for Qlty Mgmt'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION   
@ObjectModel: {
    representativeKey: 'MatlQualityAuthorizationGroup',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IMATLQLTYAUTHGR'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'MaterialQMAuthorizationGroup'
//@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['MatlQMAuthorizationGroupOID'] }]
define view entity I_MatlQualityAuthGroup
  as select from           tq01b
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '5649' // OTC of SOT definition MaterialQMAuthorizationGroup in GTNC

  association [1..*] to I_Matlqualityauthgrouptext as _Text on $projection.MatlQualityAuthorizationGroup = _Text.MatlQualityAuthorizationGroup
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key cast( tq01b.qmatauth as vdm_qmatauth preserving type ) as MatlQualityAuthorizationGroup,

      @ObjectModel.sort.enabled:false
      @ObjectModel.filter.enabled:false
      case when I_MdiOidConfiguration.Context is initial then
        // Context ID is not specified
          cast( tq01b.qmatauth as matlqmauthorizationgroupoid )
        when I_MdiOidConfiguration.Context is not initial then
      // Context ID is specified
          cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), tq01b.qmatauth ) as matlqmauthorizationgroupoid )
      end                                                    as MatlQMAuthorizationGroupOID,

      //Associations
      _Text
}
```
