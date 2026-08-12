---
name: I_CRDTACCTINFOCATEGORY
description: "Crdtacctinfocategory"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTACCTINFOCATEGORY

**Crdtacctinfocategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtAcctInformationCategory` | ✓ | |  | `infocategory` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtAcctInfoCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Credit Account Information Category'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICRDTACCTINFOCAT'
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CrdtAcctInformationCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET
                                     ]

define view I_CrdtAcctInfoCategory
  as select from ukm_infocat
    association [0..*] to I_CrdtAcctInfoCategoryText as _Text on $projection.CrdtAcctInformationCategory = _Text.CrdtAcctInformationCategory
{
      @ObjectModel.text.association: '_Text'
  key infocategory as CrdtAcctInformationCategory,

      _Text
};
```
