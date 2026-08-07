---
name: I_ATPCHECKINGGROUP
description: "Atpcheckinggroup"
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - interface-view
  - component:CA-ATP-2CL
  - lob:Cross-Application Components
---
# I_ATPCHECKINGGROUP

**Atpcheckinggroup**

| Property | Value |
|---|---|
| App Component | `CA-ATP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ATP Checking Group'

@Analytics:
{
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@ObjectModel: 
{
      representativeKey: 'ATPCheckingGroup',
      usageType.dataClass: #CUSTOMIZING,
      usageType.serviceQuality: #A,
      usageType.sizeCategory: #S,
      modelingPattern:           #ANALYTICAL_DIMENSION,
      supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                 #CDS_MODELING_DATA_SOURCE,
                                 #CDS_MODELING_ASSOCIATION_TARGET,
                                 #ANALYTICAL_DIMENSION,
                                 #SEARCHABLE_ENTITY  ]
}

@VDM:
{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view entity I_ATPCheckingGroup
  as select from tmvf
  association [0..*] to I_ATPCheckingGroupText as _Text on $projection.ATPCheckingGroup = _Text.ATPCheckingGroup
{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key mtvfp                                        as ATPCheckingGroup,

      @Semantics.booleanIndicator
      @EndUserText.label: 'Advanced ATP is active'
      case when adv_atp = 'A' then 'X' else '' end as AdvancedATPIsActive,

      _Text

}
```
