---
name: I_CNSLDTNPOSTINGLEVEL
description: "Cnsldtnpostinglevel"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNPOSTINGLEVEL

**Cnsldtnpostinglevel**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingLevel` | ✓ | |  | `cast(left(_Domain.DomainValue, 2) as fincs_postinglevel)` |  |  |
| `ConsolidationReportingLevel` |  | |  | `cast( case left(_Domain.DomainValue, 2) when '' then 'CO' when '00' then 'CO' when '01' then 'CO' when '0C' then 'CO' when '10' then 'CO' when '02' then 'GR' when '12' then 'GR' when '22' then 'GR' when '30' then 'GR' when '20' then 'PA' else '' end as fincs_reportinglevel preserving type )` |  |  |
| `DomainValue` |  | | `_Domain` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |
| `_ReportingLevel` | | ✓ | | | | |
| `_PostgLevelHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnPostingLevelT` | [0..*] |
| `_Text_2` | `I_CnsldtnPostingLevelText_2` | [0..*] |
| `_ReportingLevel` | `I_CnsldtnReportingLevel` | [0..1] |
| `_PostgLevelHierNode` | `I_CnsldtnPostingLevelHierNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPLEVL',
  compiler.compareFilter: true,
  preserveKey:true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'PostingLevel',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationPostingLevel'
}

@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Posting Level'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnPostingLevel
  as select from P_CnsldtnDomain(P_DomainName : 'FC_PLEVL') as _Domain

  association [0..*] to I_CnsldtnPostingLevelT        as _Text               on $projection.PostingLevel = _Text.PostingLevel

  association [0..*] to I_CnsldtnPostingLevelText_2   as _Text_2             on $projection.PostingLevel = _Text_2.PostingLevel

  association [0..1] to I_CnsldtnReportingLevel       as _ReportingLevel     on $projection.ConsolidationReportingLevel = _ReportingLevel.ConsolidationReportingLevel

  association [0..*] to I_CnsldtnPostingLevelHierNode as _PostgLevelHierNode on $projection.PostingLevel = _PostgLevelHierNode.PostingLevel
{
      @ObjectModel.text.association: '_Text_2'
      @ObjectModel.hierarchy.association: '_PostgLevelHierNode'
  key cast(left(_Domain.DomainValue, 2) as fincs_postinglevel) as PostingLevel,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationReportingLevel',
        foreignKey.association: '_ReportingLevel' }
      cast(
      case left(_Domain.DomainValue, 2)
      when ''   then 'CO'
      when '00' then 'CO'
      when '01' then 'CO'
      when '0C' then 'CO'
      when '10' then 'CO'
      when '02' then 'GR'
      when '12' then 'GR'
      when '22' then 'GR'
      when '30' then 'GR'
      when '20' then 'PA'
      else ''
      end as fincs_reportinglevel preserving type )            as ConsolidationReportingLevel,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Domain.DomainValue, // required for search


      _ReportingLevel,
      _PostgLevelHierNode,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,
      _Text_2
}
where
     _Domain.DomainValue = ''
  or _Domain.DomainValue = '00'
  or _Domain.DomainValue = '01'
  or _Domain.DomainValue = '0C'
  or _Domain.DomainValue = '10'
  or _Domain.DomainValue = '02'
  or _Domain.DomainValue = '12'
  or _Domain.DomainValue = '22'
  or _Domain.DomainValue = '20'
  or _Domain.DomainValue = '30';
```
