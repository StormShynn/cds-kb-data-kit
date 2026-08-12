---
name: I_EUELECTRONICDOCPARTYDOCTYPE
description: "Euelectronicdocpartydoctype"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCPARTYDOCTYPE

**Euelectronicdocpartydoctype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocPartnerId` | ✓ | |  | `partner_id` |  |  |
| `ElectronicDocBPType` | ✓ | |  | `partner_type` |  |  |
| `EU_EDocDocCategory` | ✓ | |  | `doc_categ` |  |  |
| `EU_EDocDocTypeId` |  | |  | `doc_type_id` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `IsBusinessPurposeCompleted` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Document Type for Business Partner'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
 },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocPartyDocType
  as select from edoeubupadoctyp
  association [1..1] to I_BusinessPartner as _BusinessPartner on edoeubupadoctyp.partner_id = _BusinessPartner.BusinessPartner
{

  key partner_id   as ElectronicDocPartnerId,
  key partner_type as ElectronicDocBPType,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocCategoryVH',
                  element: 'EU_EDocDocCategory' }
      }]
  key doc_categ    as EU_EDocDocCategory,
      doc_type_id  as EU_EDocDocTypeId,
      
      _BusinessPartner.AuthorizationGroup               as AuthorizationGroup,
      
      @Semantics.booleanIndicator: true
      _BusinessPartner.IsBusinessPurposeCompleted       as IsBusinessPurposeCompleted 
}
```
