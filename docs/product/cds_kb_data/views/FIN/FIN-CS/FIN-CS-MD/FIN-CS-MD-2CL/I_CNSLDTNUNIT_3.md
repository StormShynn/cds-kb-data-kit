---
name: I_CNSLDTNUNIT_3
description: "Cnsldtnunit 3"
app_component: FIN-CS-MD-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNIT_3

**Cnsldtnunit 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `ConsolidationUnit` | ✓ | |  | `cast ( bunit as fincs_consolidationunit preserving type )` |  |  |
| `Country` |  | |  | `cntry` |  |  |
| `ConsolidationUnitLink` |  | |  | `link` |  |  |
| `ConsolidationUnitLinkLabel` |  | |  | `linklabel` |  |  |
| `ConsolidationDimension` |  | |  | `dimen` |  |  |
| `Company` |  | |  | `cast(_Company.Company as fincs_company preserving type )` |  |  |
| `ETag` |  | |  | `etag` |  |  |
| `_CnsldtnDimension` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnDimension` | `I_CnsldtnDimension` | [1..1] |
| `_Text` | `I_CnsldtnUnitText_3` | [0..*] |
| `_Country` | `I_Country` | [1..1] |
| `_Company` | `I_CnsldtnCompany` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCONSUNIT3',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling: {
  type:      #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationUnit',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION
                          ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit'

@VDM.lifecycle:{
  status: #DEPRECATED,
  successor: 'I_CnsldtnUnit_4'
  }

define view I_CnsldtnUnit_3
  as select from fincs_bunit

  association [1..1] to I_CnsldtnDimension  as _CnsldtnDimension on $projection.ConsolidationDimension = _CnsldtnDimension.ConsolidationDimension

  association [0..*] to I_CnsldtnUnitText_3 as _Text             on $projection.ConsolidationUnit = _Text.ConsolidationUnit

  association [1..1] to I_Country           as _Country          on $projection.Country = _Country.Country

  //association for company determination
  //--> must not be exposed
  association [0..1] to I_CnsldtnCompany    as _Company          on fincs_bunit.rcomp = _Company.Company

{

      @ObjectModel.text.association: '_Text'
  key cast ( bunit as fincs_consolidationunit preserving type ) as ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_Country'
      cntry                                                     as Country,

      link                                                      as ConsolidationUnitLink,

      linklabel                                                 as ConsolidationUnitLinkLabel,

      @ObjectModel.foreignKey.association: '_CnsldtnDimension'
      dimen                                                     as ConsolidationDimension,

      cast(_Company.Company as fincs_company preserving type )  as Company, //only project existing companies

      @UI.hidden: true
      etag                                                      as ETag,


      _CnsldtnDimension,
      _Country,
      _Text

}
where
  dimen = 'Y1'
```
