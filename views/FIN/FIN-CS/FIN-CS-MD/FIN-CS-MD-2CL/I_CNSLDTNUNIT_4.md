---
name: I_CNSLDTNUNIT_4
description: Cnsldtnunit 4
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNUNIT_4

**Cnsldtnunit 4**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationUnit` | `cast(bunit as fincs_consolidationunit preserving type )` |
| `Country` | `cast(cntry as fincs_country preserving type )` |
| `Company` | `cast(_Company.Company as fincs_company preserving type )` |
| `ConsolidationUnitLink` | `cast(link as fincs_md_link preserving type )` |
| `ConsolidationUnitLinkLabel` | `cast(linklabel as fincs_md_link_label preserving type )` |
| `ETag` | `etag` |
| `CreationDateTime` | `created_at` |
| `_Text` | *Association* |
| `_CnsldtnUnitHierNode` | *Association* |
| `_TmprlNde` | *Association* |
| `_CnsldtnUnitByTime` | *Association* |
| `_CnsldtnUnitByTimeVersion` | *Association* |
| `_Country` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnUnitText_4` | [0..*] |
| `_CnsldtnUnitHierNode` | `I_CnsldtnUnitHierNode_3` | [0..*] |
| `_TmprlNde` | `I_CnsldtnUnitTNHierNode` | [0..*] |
| `_CnsldtnUnitByTime` | `I_CnsldtnUnitByTime_2` | [0..*] |
| `_CnsldtnUnitByTimeVersion` | `I_CnsldtnUnitByTimeVersion_2` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Company` | `I_CnsldtnCompany` | [0..1] |
| `_Extension` | `E_CnsldtnUnit` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSCONSUNIT4'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'ConsolidationUnit'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit'

define view entity I_CnsldtnUnit_4
  as select from fincs_bunit

  association [0..*] to I_CnsldtnUnitText_4          as _Text                     on $projection.ConsolidationUnit = _Text.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitHierNode_3      as _CnsldtnUnitHierNode      on $projection.ConsolidationUnit = _CnsldtnUnitHierNode.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitTNHierNode      as _TmprlNde                 on $projection.ConsolidationUnit = _TmprlNde.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitByTime_2        as _CnsldtnUnitByTime        on $projection.ConsolidationUnit = _CnsldtnUnitByTime.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitByTimeVersion_2 as _CnsldtnUnitByTimeVersion on $projection.ConsolidationUnit = _CnsldtnUnitByTimeVersion.ConsolidationUnit

  association [0..1] to I_Country                    as _Country                  on $projection.Country = _Country.Country

  //association for company determination
  //--> must not be exposed
  association [0..1] to I_CnsldtnCompany             as _Company                  on fincs_bunit.rcomp = _Company.Company

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnUnit                as _Extension                on $projection.ConsolidationUnit = _Extension.ConsolidationUnit

{

      @ObjectModel:{
        text.association: '_Text',
        hierarchy.association: '_CnsldtnUnitHierNode'
      }
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity:{
          name: 'I_CnsldtnUnitVH',
          element: 'ConsolidationUnit' } }]
  key cast(bunit as fincs_consolidationunit preserving type )  as ConsolidationUnit,

      @ObjectModel: {
        foreignKey.association: '_Country',
        sapObjectNodeTypeReference: 'Country' }
      @Search:{ ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity:{
          name: 'I_CountryVH',
          element: 'Country' } }]
      cast(cntry as fincs_country preserving type )            as Country,

      cast(_Company.Company as fincs_company preserving type ) as Company, //only project existing companies

      cast(link as fincs_md_link preserving type )             as ConsolidationUnitLink,

      cast(linklabel as fincs_md_link_label preserving type )  as ConsolidationUnitLinkLabel,

      @Analytics.hidden: true
      etag                                                     as ETag,

      @Semantics.systemDateTime.createdAt
      created_at                                               as CreationDateTime,

      _Text,
      _CnsldtnUnitHierNode,
      @ObjectModel.association.toHierarchy: true
      _TmprlNde,
      _CnsldtnUnitByTime,
      _CnsldtnUnitByTimeVersion,
      _Country
}
where
  dimen = 'Y1'
```
