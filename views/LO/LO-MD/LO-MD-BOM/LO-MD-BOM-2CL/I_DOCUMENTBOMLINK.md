---
name: I_DOCUMENTBOMLINK
description: Documentbomlink
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - bom
  - document
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_DOCUMENTBOMLINK

**Documentbomlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterial` | `stlnr` |
| key `BillOfMaterialVariant` | `stlal` |
| key `DocumentType` | `dokar` |
| key `DocNumber` | `doknr` |
| key `DocumentVersion` | `dokvr` |
| key `DocumentPart` | `doktl` |
| `BillOfMaterialCategory` | `cast ('D' as stlty preserving type)` |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@EndUserText.label: 'Document Link for Bill of Material'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_DocumentBOMLink
  as select from dost
{
  key stlnr                                   as BillOfMaterial,
  key stlal                                   as BillOfMaterialVariant,
  key dokar                                   as DocumentType,
  key doknr                                   as DocNumber,
  key dokvr                                   as DocumentVersion,
  key doktl                                   as DocumentPart,
  cast ('D' as stlty preserving type)     as BillOfMaterialCategory
}
```
