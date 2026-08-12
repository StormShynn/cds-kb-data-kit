---
name: I_CNSLDTNBILLINGDOCTYPEHIERT
description: "CNSLDTNBilling DocumentTYPEHIERT"
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
  - billing-document
  - billing
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBILLINGDOCTYPEHIERT

**CNSLDTNBilling DocumentTYPEHIERT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `CnsldtnBillingDocTypeHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_billingdoctypehierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnBillingDocTypeHierText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_billingdoctypehiertext preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnBillingDocTypeHier` | [1..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  representativeKey: 'CnsldtnBillingDocTypeHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnBillingDocTypeHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }

@EndUserText.label: 'Cnsldtn Billing Doc Type Hier - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnBillingDocTypeHierT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS27', P_MasterDataType : 'FKART' ) as _HierarchyText

  association [1..1] to I_CnsldtnBillingDocTypeHier as _Hierarchy on  $projection.CnsldtnBillingDocTypeHierarchy = _Hierarchy.CnsldtnBillingDocTypeHierarchy
                                                                  and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_billingdoctypehierarchy preserving type )     as CnsldtnBillingDocTypeHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_billingdoctypehiertext  preserving type ) as CnsldtnBillingDocTypeHierText,


        /* associations */
        _HierarchyText._Language,
        _Hierarchy
}
```
