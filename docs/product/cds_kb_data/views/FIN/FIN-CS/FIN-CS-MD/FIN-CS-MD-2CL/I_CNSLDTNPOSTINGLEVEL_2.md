---
name: I_CNSLDTNPOSTINGLEVEL_2
description: "Cnsldtnpostinglevel 2"
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
# I_CNSLDTNPOSTINGLEVEL_2

**Cnsldtnpostinglevel 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPostingLevel` | ✓ | |  | `cast(left(_Source.DomainValue, 2) as fincs_postinglevel preserving type )` |  |  |
| `ConsolidationReportingLevel` |  | |  | `cast( case left(_Source.DomainValue, 2) when '' then 'CO' when '00' then 'CO' when '01' then 'CO' when '0C' then 'CO' when '10' then 'CO' when '02' then 'GR' when '12' then 'GR' when '22' then 'GR' when '30' then 'GR' when '20' then 'PA' else '' end as fincs_reportinglevel preserving type )` |  |  |
| `DomainValue` |  | | `_Source` | `DomainValue` |  |  |
| `_Text` | | ✓ | | | | |
| `_ReportingLevel` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnPostingLevelText_3` | [0..*] |
| `_ReportingLevel` | `I_CnsldtnReportingLevel` | [0..1] |
| `_HierarchyNode` | `I_CnsldtnPostgLevelHierNode_2` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationPostingLevel',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationPostingLevel'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Posting Level'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_CnsldtnPostingLevel_2
  as select from P_CnsldtnDomain(P_DomainName : 'FC_PLEVL') as _Source

  association [0..*] to I_CnsldtnPostingLevelText_3   as _Text           on $projection.ConsolidationPostingLevel = _Text.ConsolidationPostingLevel

  association [0..1] to I_CnsldtnReportingLevel       as _ReportingLevel on $projection.ConsolidationReportingLevel = _ReportingLevel.ConsolidationReportingLevel

  association [0..*] to I_CnsldtnPostgLevelHierNode_2 as _HierarchyNode  on $projection.ConsolidationPostingLevel = _HierarchyNode.ConsolidationPostingLevel
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'

  key cast(left(_Source.DomainValue, 2) as fincs_postinglevel preserving type ) as ConsolidationPostingLevel,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationReportingLevel',
        foreignKey.association: '_ReportingLevel' }
      cast(
      case left(_Source.DomainValue, 2)
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
      end as fincs_reportinglevel preserving type )                             as ConsolidationReportingLevel,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _Source.DomainValue, // required for search


      _ReportingLevel,
      _HierarchyNode,
      _Text
}
where
     _Source.DomainValue = ''
  or _Source.DomainValue = '00'
  or _Source.DomainValue = '01'
  or _Source.DomainValue = '0C'
  or _Source.DomainValue = '10'
  or _Source.DomainValue = '02'
  or _Source.DomainValue = '12'
  or _Source.DomainValue = '22'
  or _Source.DomainValue = '20'
  or _Source.DomainValue = '30';
```
