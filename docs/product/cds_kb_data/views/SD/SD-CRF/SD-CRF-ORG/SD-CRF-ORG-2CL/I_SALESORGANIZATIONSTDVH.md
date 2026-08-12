---
name: I_SALESORGANIZATIONSTDVH
description: "Sales Organization"
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESORGANIZATIONSTDVH')/$value
semantic_en: "Sales Organization"
semantic_vi: "Sales Organization — CDS view giao diện (organizational data) dựa trên I_SalesOrganization."
keywords:
  - "sales"
  - "organization"
tags:
  - SD
  - bo:salesorder
  - component:SD-CRF-ORG-2CL
  - interface-view
  - lob:sales & distribution
  - SD-CRF
  - SD-CRF-ORG
  - SD-CRF-ORG-2CL
---
# I_SALESORGANIZATIONSTDVH

**Sales Organization**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESORGANIZATIONSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  |  | `CHAR(4)` | Sales Organization |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESORGANIZATIONSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESORGANIZATIONSTDVH')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Sales Organization'

@ObjectModel: { representativeKey: 'SalesOrganization',
                usageType: { dataClass: #ORGANIZATIONAL,
                             serviceQuality: #A,
                             sizeCategory: #S },
                dataCategory: #VALUE_HELP,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SEARCHABLE_ENTITY,
                                         #VALUE_HELP_PROVIDER ] }

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
define view entity I_SalesOrganizationStdVH 
    as select from I_SalesOrganization as SalesOrganization
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key SalesOrganization.SalesOrganization,

    _Text

}
```
