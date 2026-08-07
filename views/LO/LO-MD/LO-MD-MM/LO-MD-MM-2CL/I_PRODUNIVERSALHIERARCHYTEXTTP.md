---
name: I_PRODUNIVERSALHIERARCHYTEXTTP
description: Produniversalhierarchytexttp
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVERSALHIERARCHYTEXTTP

**Produniversalhierarchytexttp**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  |  |
| `ProdUnivHierarchy` | ✓ | |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  |  |
| `ProdHierarchyValidityStartDate` |  | |  |  |
| `ProdUnivHierarchyText` |  | |  |  |
| `_ProdUniversalHierarchy` | | ✓ | | |
| `_LanguageText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Universal Hierarchy - Text TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    dataCategory: #TEXT,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
    }
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ProdUniversalHierarchyTextTP
  as projection on R_ProdUniversalHierarchyTextTP
{
      @Semantics.language: true
      @ObjectModel.text.association: '_LanguageText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LanguageVH', element : 'Language'} , useAsTemplate: true }]
  key Language,
  key ProdUnivHierarchy,
      @Semantics.businessDate.to: true
  key ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      ProdHierarchyValidityStartDate,
      @Semantics.text: true
      ProdUnivHierarchyText,
      _ProdUniversalHierarchy : redirected to parent I_ProdUniversalHierarchyTP,
      _LanguageText

}
```
