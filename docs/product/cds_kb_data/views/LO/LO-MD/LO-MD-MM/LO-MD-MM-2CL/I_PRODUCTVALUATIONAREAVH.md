---
name: I_PRODUCTVALUATIONAREAVH
description: "Productvaluationareavh"
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONAREAVH

**Productvaluationareavh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `ValuationArea` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CompanyCodeName` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDVALAREAVH'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Product Valuation Area'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Search.searchable: true

@ObjectModel: {
    representativeKey: ['ValuationArea'],
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #S,
    usageType.dataClass: #MASTER
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER  
@AccessControl.authorizationCheck: #CHECK 
@ObjectModel.dataCategory: #VALUE_HELP
define view I_ProductValuationAreaVH
  as select from I_Purreqvaluationarea
{
      @Search.defaultSearchElement: true
  key ValuationArea,
      CompanyCode,
      @Semantics.text
      CompanyCodeName,
      _CompanyCode
}
```
