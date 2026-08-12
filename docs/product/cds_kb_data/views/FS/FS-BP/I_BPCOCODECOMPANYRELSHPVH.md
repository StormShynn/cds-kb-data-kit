---
name: I_BPCOCODECOMPANYRELSHPVH
description: "Company Relationship of BP in CoCode"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
