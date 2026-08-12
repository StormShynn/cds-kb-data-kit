---
name: I_BPCOCODECOMPANYRELSHPVH
description: "Company Relationship of BP in CoCode"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPVH')/$value
semantic_en: "Company Relationship of BP in CoCode"
semantic_vi: "Company Relationship of BP in CoCode — CDS view giao diện dựa trên I_BPCoCodeCompanyRelationship."
keywords:
  - "company"
  - "relationship"
  - "cocode"
  - "code"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
---
# I_BPCOCODECOMPANYRELSHPVH

**Company Relationship of BP in CoCode**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPCoCodeCompanyRelationship` | ✓ | |  |  | `CHAR(1)` | Company Relationship in Company Code |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCOCODECOMPANYRELSHPVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPCCCORELVH'
@EndUserText.label: 'Company Relationship of BP in CoCode'
@ObjectModel.representativeKey: 'BPCoCodeCompanyRelationship'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  // For C1-Release

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #CUSTOMIZING  // Combobox
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: #VALUE_HELP_PROVIDER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view I_BPCoCodeCompanyRelshpVH 
  as select from I_BPCoCodeCompanyRelationship
{
      @ObjectModel.text.element: 'BPCoCodeCompanyRelshpDesc'
      key BPCoCodeCompanyRelationship,
      
      _Text,
      _Text[1:Language = $session.system_language ].BPCoCodeCompanyRelshpDesc
}
```
