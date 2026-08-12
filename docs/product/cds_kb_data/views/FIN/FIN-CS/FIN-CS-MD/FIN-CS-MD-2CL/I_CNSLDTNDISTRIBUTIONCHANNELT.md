---
name: I_CNSLDTNDISTRIBUTIONCHANNELT
description: "Cnsldtndistributionchannelt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDISTRIBUTIONCHANNELT

**Cnsldtndistributionchannelt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `DistributionChannel` | ✓ | |  | `cast( _Source.DistributionChannel as fincs_distributionchannel preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.DistributionChannelName as fincs_description_text_20 preserving type )` |  |  |
| `DistributionChannelName` |  | |  | `cast( _Source.DistributionChannelName as fincs_distributionchannelname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_DistributionChannel` | `I_CnsldtnDistributionChannel` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSDISTRICHLT'
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'DistributionChannel',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnDistributionChannelText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Cmbnd Distribution Channel - Txt'
define view I_CnsldtnDistributionChannelT
  as select distinct from P_CnsldtnDistributionChannelT as _Source

    inner join            I_CnsldtnDistributionChannel  as _Main on  _Main.DistributionChannel           = _Source.DistributionChannel
                                                                 and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnDistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnDistributionChannelVH',
          element: 'DistributionChannel'
        }
      }]
  key cast( _Source.DistributionChannel as fincs_distributionchannel preserving type )         as DistributionChannel,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )     as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'DistributionChannelName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'DistributionChannelName' }
      cast( _Source.DistributionChannelName  as fincs_description_text_20 preserving type )    as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.DistributionChannelName as fincs_distributionchannelname preserving type ) as DistributionChannelName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _DistributionChannel
}
where
  _Source.Language is not null
```
